// Write a function that receives n and prints the numbers from 1 to n. For numbers that are multiples of three it should output “Fizz” instead, for numbers that are multiples of five it should output “Buzz” instead, and for numbers that are multiples of five and three output it should “FizzBuzz” instead.
// 3 muktiples == fizz, 5 multiples == buzz, multiples 3*5 = fizzbuzz
function fizzBuzz(n){
  for(let i=1; i <= n; i++){
    if(i===15 || i%15===0){
      console.log('FizzBuzz');
    }else if(i===5 || i%5===0){
      console.log('Buzz');
    }else if(i===3 || i%3===0){
      console.log('Fizz');
    }else{
      console.log(i);
    }
  }
}

fizzBuzz(30);