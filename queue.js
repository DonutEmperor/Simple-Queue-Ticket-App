export default class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(item){
        this.items.push(item);
    }

    dequeue(){
        return this.items.shift();
    }
}