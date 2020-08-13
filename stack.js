class stack{
    constructor(){
        this.data =  [];
        this.top = 0;
    }
    push(element){
        this.data[this.top]=element;
        this.top++;
    }
    pop(){
        this.data.pop();
        this.top--;
    }
    peek(){
        return this.data[this.top];
    }
    print(){
        return this.data;
    }
}

let stack1 = new stack();
stack1.push(1);
stack1.pop();
console.log(stack1.print());