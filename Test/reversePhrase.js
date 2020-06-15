// Create a function that reverses the words on a string

function reversePhrase(phrase){
  return phrase.split(" ").reverse().join(" ");
}

reversePhrase("Dulce likes candies");