const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(function (tutorial){
    return tutorial.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
    
    })
    .join(" ")
      
  }) 

}




// Action Plan
// 1. google how to access the first string
// 2. google how to capitalize the first string


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice