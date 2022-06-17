class Stack {
    list = new Map();
    maxSize = null;

    constructor(maxSize) {
        this.maxSize = Number(maxSize) || null;
    };

    get max() {
        console.log(Number(this.maxSize))
    }

    get size() {
        return this.list.size;
    };

    push(item) {
        if (!this.maxSize || this.size < this.maxSize) {
            this.list.set(this.size, item);
        };
        return this.size;
    };

    pop() {
        if (this.size) {
            const lastItem = this.list.get(this.size - 1);
            this.list.delete(this.size - 1);
            return lastItem;
        };
        return null;
    };

    peek() {
        return this.list.get(this.size - 1) || null;
    };

    clear() {
        this.list = new Map();
    };

    print() {
        console.log(Array.from(this.list.values()));
    };

};

const myStack = new Stack();
myStack.push("a")
myStack.push("b")
myStack.push("c")
myStack.push("d")
myStack.max
console.log(myStack.print());
console.log(myStack.size);

