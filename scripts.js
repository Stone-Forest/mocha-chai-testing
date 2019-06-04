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

  // проверки
  if (!Array.isArray(arr)) {
    throw new TypeError('sumTwoSmallestNum() принимает только массивы.');
  }
  if (arr.length < 2) {
    throw new RangeError('Длина входящего массива должна быть не менее 2-ух элементов.');
  }
  if (arr.length > 1000) {
    throw new RangeError('Длина входящего массива должна быть не более 1000 элементов.');
  }

  const elemsAreNums = arr.every(elem => {  // проверка всех элементов массива на число, Infinite и NaN
    return (typeof elem === 'number') && isFinite(elem)
  });
  if (!elemsAreNums) {
    throw new TypeError('Все элементы переданного массива должны быть числами (не Infinite и не NaN).');
  }

  // основной код
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