const createCounter = () => {
 let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count
    }
}

const counter = createCounter(5);
console.log(`Counter: ${counter.increment()}`);
console.log(`Counter: ${counter.increment()}`);
console.log(`Counter: ${counter.increment()}`);
