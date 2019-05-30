button.addEventListener("click", calculate);

function calculate() {
  const arr = strToArr(text.value);

  result.value = sumTwoSmallestNum(arr);
}

function strToArr(str) {
  const arr = str.split(',');
  if (arr[arr.length - 1] === "") arr.pop();

  return arr.map(item => +item);
}

function sumTwoSmallestNum(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('sumTwoSmallestNum() принимает только массивы.');
  }
  if (arr.length < 2) {
    throw new RangeError('Длина входящего массива должна быть не менее 2-ух элементов.');
  }
  if (arr.length > 1000) {
    throw new RangeError('Длина входящего массива должна быть не более 1000 элементов.');
  }

  // проверка всех элементов массива на число, Infinite и NaN
  const elemsAreNums = arr.every(elem => {
    return (typeof elem === 'number') && isFinite(elem)
  });
  if (!elemsAreNums) {
    throw new TypeError('Все элементы переданного массива должны быть числами (не Infinite и не NaN).');
  }

  const sortedArr = arr.slice().sort((a, b) => a - b);

  return sortedArr[0] + sortedArr[1];
}