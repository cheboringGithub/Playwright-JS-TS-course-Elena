// Glossary Tooltips JavaScript

class GlossaryTooltips {
  constructor() {
    this.tooltip = null;
    this.currentLink = null;
    this.showDelay = 300;
    this.hideDelay = 100;
    this.showTimeout = null;
    this.hideTimeout = null;
    
    this.init();
  }

  init() {
    this.createTooltip();
    this.bindEvents();
  }

  createTooltip() {
    this.tooltip = document.getElementById('glossary-tooltip');
    if (!this.tooltip) {
      this.tooltip = document.createElement('div');
      this.tooltip.id = 'glossary-tooltip';
      this.tooltip.className = 'glossary-tooltip';
      this.tooltip.role = 'tooltip';
      this.tooltip.innerHTML = `
        <div class="glossary-tooltip-content">
          <div class="glossary-tooltip-title"></div>
          <div class="glossary-tooltip-text"></div>
        </div>
        <div class="glossary-tooltip-arrow"></div>
      `;
      document.body.appendChild(this.tooltip);
    }
  }

  bindEvents() {
    // Bind events to all glossary links
    document.addEventListener('mouseenter', this.handleMouseEnter.bind(this), true);
    document.addEventListener('mouseleave', this.handleMouseLeave.bind(this), true);
    document.addEventListener('scroll', this.handleScroll.bind(this), true);
    document.addEventListener('resize', this.handleResize.bind(this));
  }

  handleMouseEnter(e) {
    const link = e.target.closest('a[data-glossary-term]');
    if (!link) return;

    this.clearTimeouts();
    this.currentLink = link;

    this.showTimeout = setTimeout(() => {
      this.showTooltip(link);
    }, this.showDelay);
  }

  handleMouseLeave(e) {
    const link = e.target.closest('a[data-glossary-term]');
    if (!link && e.target !== this.tooltip && !this.tooltip.contains(e.target)) {
      this.clearTimeouts();
      this.hideTimeout = setTimeout(() => {
        this.hideTooltip();
      }, this.hideDelay);
    }
  }

  handleScroll() {
    if (this.tooltip.classList.contains('show')) {
      this.hideTooltip();
    }
  }

  handleResize() {
    if (this.tooltip.classList.contains('show')) {
      this.updateTooltipPosition();
    }
  }

  showTooltip(link) {
    const term = link.getAttribute('data-glossary-term');
    const definition = link.getAttribute('data-glossary-definition') || 'Определение загружается...';
    const category = link.getAttribute('data-glossary-category') || '';

    this.updateTooltipContent(term, definition, category);
    this.updateTooltipPosition(link);
    
    // Add show class with slight delay for animation
    requestAnimationFrame(() => {
      this.tooltip.classList.add('show');
    });
  }

  hideTooltip() {
    this.tooltip.classList.remove('show');
    this.currentLink = null;
  }

  updateTooltipContent(term, definition, category) {
    const titleElement = this.tooltip.querySelector('.glossary-tooltip-title');
    const textElement = this.tooltip.querySelector('.glossary-tooltip-text');
    
    titleElement.textContent = term;
    textElement.textContent = definition;
    
    if (category) {
      titleElement.textContent += ` (${category})`;
    }
  }

  updateTooltipPosition(link = this.currentLink) {
    if (!link) return;

    const linkRect = link.getBoundingClientRect();
    const tooltipRect = this.tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const scrollY = window.pageYOffset;
    const scrollX = window.pageXOffset;

    // Reset position classes
    this.tooltip.classList.remove('bottom', 'left', 'right');
    
    let top = linkRect.bottom + scrollY + 10;
    let left = linkRect.left + scrollX + (linkRect.width / 2) - (tooltipRect.width / 2);

    // Adjust horizontal position if tooltip goes outside viewport
    if (left < 10) {
      left = 10;
    } else if (left + tooltipRect.width > viewportWidth - 10) {
      left = viewportWidth - tooltipRect.width - 10;
    }

    // Check if tooltip goes below viewport, position above if needed
    if (linkRect.bottom + tooltipRect.height + 10 > viewportHeight) {
      top = linkRect.top + scrollY - tooltipRect.height - 10;
      this.tooltip.classList.add('bottom');
    }

    // Position tooltip
    this.tooltip.style.top = `${top}px`;
    this.tooltip.style.left = `${left}px`;

    // Update arrow position
    const arrowLeft = linkRect.left + scrollX + (linkRect.width / 2) - left;
    const arrow = this.tooltip.querySelector('.glossary-tooltip-arrow');
    arrow.style.left = `${Math.max(12, Math.min(arrowLeft, tooltipRect.width - 12))}px`;
  }

  clearTimeouts() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
}

// Initialize tooltips when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.glossaryTooltips = new GlossaryTooltips();
});

// Re-initialize tooltips when content is dynamically loaded (for SPA)
document.addEventListener('contentLoaded', () => {
  if (window.glossaryTooltips) {
    window.glossaryTooltips.bindEvents();
  }
});