// Create a function where you return the difference between the sum and product of a given number

function difference(number){
  let add = 0;
  let mult = 1;
  while(number > 0){
    const current = number % 10;
    add += current;
    mult *= current;
    number = Math.floor(number/10);
  };
  console.log( mult-add);
}

difference(25);
// 10 - 7 = 3