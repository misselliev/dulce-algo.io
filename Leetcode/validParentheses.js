// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
// Input: "()"
// Output: true

// Input: "()[]{}"
// Output: true

// Input: "(]"
// Output: false

var isValid = function(s) {
  let stack = [];
  if (s.length % 2 !== 0) {
    return false
  } else {
    for(let i = 0; i < s.length; i++){
      if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
        stack.push(s[i]);
      }
      if(s[i] === ')'){
        if(stack.pop()!=='(') return false; 
      }
      if(s[i] === ']'){
        if(stack.pop()!=='[') return false;
      }
      if(s[i] === '}'){
        if(stack.pop()!=='{') return false;
      }
    }
  }
  if(stack.length !==0) return false;
    
  return true;
};

isValid('()');
