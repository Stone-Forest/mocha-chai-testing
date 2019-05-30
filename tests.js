mocha.setup('bdd');
const assert = chai.assert;

/****************************************************/

describe('sumTwoSmallestNum()', () => {

  describe('Суммирование 2-ух минимальных элементов', () => {

    it('Сумма для [4, 0, 3, 19, 492, -10, 1] равна -10', () => {
      assert.equal(sumTwoSmallestNum([4, 0, 3, 19, 492, -10, 1]), -10);
    });

    it('Сумма для [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] равна 2', () => {
      assert.equal(sumTwoSmallestNum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 2);
    });

  });

  describe('В функцию передан не массив', () => {

    it('Выбросит ошибку, если передано число', () => {
      assert.throws(function () { sumTwoSmallestNum(123) }, TypeError, 'sumTwoSmallestNum() принимает только массивы.');
    });

    it('Выбросит ошибку, если передана строка', () => {
      assert.throws(function () { sumTwoSmallestNum('abc') }, TypeError, 'sumTwoSmallestNum() принимает только массивы.');
    });

    it('Выбросит ошибку, если передан true', () => {
      assert.throws(function () { sumTwoSmallestNum(true) }, TypeError, 'sumTwoSmallestNum() принимает только массивы.');
    });

    it('Выбросит ошибку, если передан false', () => {
      assert.throws(function () { sumTwoSmallestNum(false) }, TypeError, 'sumTwoSmallestNum() принимает только массивы.');
    });

    it('Выбросит ошибку, если передан null', () => {
      assert.throws(function () { sumTwoSmallestNum(null) }, TypeError, 'sumTwoSmallestNum() принимает только массивы.');
    });

    it('Выбросит ошибку, если передан undefined', () => {
      assert.throws(function () { sumTwoSmallestNum(undefined) }, TypeError, 'sumTwoSmallestNum() принимает только массивы.');
    });

    it('Выбросит ошибку, если передан объект', () => {
      assert.throws(function () { sumTwoSmallestNum({ a: 'abc' }) }, TypeError, 'sumTwoSmallestNum() принимает только массивы.');
    });

    it('Выбросит ошибку, если передана функция', () => {
      assert.throws(function () { sumTwoSmallestNum(() => 'Hello World!') }, TypeError, 'sumTwoSmallestNum() принимает только массивы.');
    });

  });

  describe('Проверка длины переданного массива', () => {

    it('Выбросит ошибку, если массив пустой', () => {
      assert.throws(function () { sumTwoSmallestNum([]) }, RangeError);
    });

    it('Выбросит ошибку, если в массиве один элемент', () => {
      assert.throws(function () { sumTwoSmallestNum([1]) }, RangeError);
    });

    it('Выбросит ошибку, если длина массива более 1000', () => {
      const arr = new Array(1001);
      assert.throws(function () { sumTwoSmallestNum(arr) }, RangeError);
    });

  });

  describe('Переданный массив содержит "не числа"', () => {

    it('Выбросит ошибку, если содержит строку', () => {
      assert.throws(function () { sumTwoSmallestNum([1, 2, 3, 4, 'string']) }, TypeError);
    });

    it('Выбросит ошибку, если содержит true', () => {
      assert.throws(function () { sumTwoSmallestNum([1, 2, 3, 4, true]) }, TypeError);
    });

    it('Выбросит ошибку, если содержит false', () => {
      assert.throws(function () { sumTwoSmallestNum([1, 2, 3, 4, false]) }, TypeError);
    });

    it('Выбросит ошибку, если содержит undefined', () => {
      assert.throws(function () { sumTwoSmallestNum([1, 2, 3, 4, undefined]) }, TypeError);
    });

    it('Выбросит ошибку, если содержит null', () => {
      assert.throws(function () { sumTwoSmallestNum([1, 2, 3, 4, null]) }, TypeError);
    });

    it('Выбросит ошибку, если содержит массив', () => {
      assert.throws(function () { sumTwoSmallestNum([1, 2, 3, 4, [1, 2, 3]]) }, TypeError);
    });

    it('Выбросит ошибку, если содержит объект', () => {
      assert.throws(function () { sumTwoSmallestNum([1, 2, 3, 4, { a: 'abc' }]) }, TypeError);
    });

    it('Выбросит ошибку, если содержит функцию', () => {
      assert.throws(function () { sumTwoSmallestNum([1, 2, 3, 4, () => 'Hello World!']) }, TypeError);
    });

  });

  describe('Проверка возвращаемого значения', () => {

    it('Функция возвращает число', () => {
      assert.isNumber(sumTwoSmallestNum([1, 2, 3, 4, 5]), 'sumTwoSmallestNum() вернула не число');
    });

    it('Функция возвращает не NaN и не Infinity', () => {
      assert.isFinite(sumTwoSmallestNum([1, 2, 3, 4, 5]), 'sumTwoSmallestNum() вернула NaN или Infinity');
    });

    it('Функция возвращает не NaN', () => {
      assert.isNotNaN(sumTwoSmallestNum([1, 2, 3, 4, 5]), 'sumTwoSmallestNum() вернула NaN');
    });

  });

});

/****************************************************/

mocha.run();