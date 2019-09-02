# Тестирование JavaScript [![Mocha](https://img.shields.io/badge/mocha-v6.1.4-blue.svg)](https://mochajs.org/) [![Chai](https://img.shields.io/badge/chai-v4.2.0-green.svg)](https://www.chaijs.com/)
## Условие
На странице есть текстовое поле и кнопка. В текстовое поле вводят цифры через запятую. После нажатия на кнопку отображается результат обработки введенного массива чисел.

Напиши функцию, на вход которой приходит массив чисел. Функция возвращает сумму двух минимальных элементов массива. Например, если дан массив [4, 0, 3, 19, 492, -10, 1], то результатом будет -10, потому что два минимальных числа -10 и 0, а их сумма -10.

Напиши минимум 3 модульных теста на эту функцию.

*HINT: учти, что массив может быть пустым, или без цифр или состоять из 100 млн. элементов, поэтому надо учесть разные граничные условия.*

## Описание
- index.html — страница с формой ввода чисел
- scripts.js — логика для страницы с формой
- styles.css — стили для страницы с формой
- tests.html — вывод результата тестов
- tests.js — файл с тестами + код для их инициализации и запуска

## Реализации и время выполнения
### Первый вариант (через сортировку массива):
```js
function sumTwoSmallestNum(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);

  return sortedArr[0] + sortedArr[1];
}
```
В основе метода `sort()` лежит алгоритм быстрой сортировки. Его время выполнения:
- Худшее время O(n<sup>2</sup>)
- Лучшее время O(n log n) (обычное разделение) или O(n) (разделение на 3 части)
- Среднее время O(n log n)

### Второй вариант (за один проход по массиву):
```js
function sumTwoSmallestNum(arr) {
  const newArr = arr.slice();
  let min1, min2;

  if (newArr[0] < newArr[1]) {
    min1 = newArr[0];
    min2 = newArr[1];
  } else {
    min1 = newArr[1];
    min2 = newArr[0];
  }

  for (let i = 2; i < newArr.length; i++) {
    if (arr[i] <= min1) {
      min2 = min1;
      min1 = arr[i];
    } else if (arr[i] > min1 && arr[i] < min2) {
      min2 = arr[i];
    }
  }

  return min1 + min2;
}
```
Время выполнения линейное — O(n).
