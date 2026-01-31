function createCounter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;           // count value is preserved beteen function call s due to closure
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
