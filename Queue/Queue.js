class Queue{
  constructor(){
    this.data = [];
  }
  add(item){
    this.data.unshift(item);
  }
  remove(){
    return this.data.pop();
  }
  peek(){
    return this.data[this.data.lenght-1]
  }
}
