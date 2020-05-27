const Queue = require('./Queue');

// Create a function that intertwines together two queue items

function Weave(dataItem1, dataItem2){
  const q= new Queue();

  while(dataItem1.peek() || dataItem2.peek()){
    if(dataItem1.peek()){
      q.add(dataItem1.remove());
    }
    if(dataItem2.peek()){
      q.add(dataItem2.remove());
    }
  }
  return q;
}

