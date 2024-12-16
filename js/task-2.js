function makeArray(firstArray, secondArray, maxLength) {
  const thirdArray = firstArray.concat(secondArray); // Об'єднуємо масиви
  if (thirdArray.length > maxLength) {
    return thirdArray.slice(0, maxLength); // Повертаємо частину масиву, якщо перевищує maxLength
  } else {
    return thirdArray; // Повертаємо весь масив, якщо не перевищує
  }
}
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));
