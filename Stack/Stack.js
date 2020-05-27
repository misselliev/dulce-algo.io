class Stack{
  constructor(){
    this.data = [];
  }

  push(item){
    this.data.push(item);
  }

  pop(){
    this.data.pop();
  }

  peek(){
    return this.data[this.data.length - 1];
  }
}