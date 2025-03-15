function createCounter(init) {
    let count = init;
    return {
        reset: function () {
            count = init;
            return count;
        },
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        }
    }
};


console.log(createCounter(65).reset());
console.log(createCounter(65).increment());
console.log(createCounter(65).decrement());
