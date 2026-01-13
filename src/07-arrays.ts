(() => {
  let prices = [1,2,3,4,5,6,7];
  // prices.push('asas');
  // prices.push(true);
  // prices.push({});
  prices.push(121212);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2];
  const newArray = numbers.map(item => item * 2);
  console.log(newArray);
})();
