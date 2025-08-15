// Что выведет код? Объясните обработку ошибок
async function fetchData() {
  throw new Error('Ошибка загрузки данных');
}

async function fetchDataWithTryCatch() {
  try {
    throw new Error('Ошибка в try блоке');
  } catch (error) {
    console.log('Поймана ошибка:', error.message);
    return 'Данные обработаны';
  }
}

async function handleErrors() {
  // Без try-catch
  const result1 = await fetchData().catch(error => {
    console.log('Ошибка перехвачена:', error.message);
    return 'Значение по умолчанию';
  });
  
  console.log('Результат 1:', result1);
  
  // С try-catch
  const result2 = await fetchDataWithTryCatch();
  console.log('Результат 2:', result2);
}

handleErrors();
