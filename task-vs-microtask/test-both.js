// setTimeout puts tasks in the normal queue task
// promises puts tasks in the microtask queue
// eventloop checks first microtask queue and runs it

setTimeout(() => console.log('first normal task'), 0);
setTimeout(() => console.log('second normal task'), 0);
Promise.resolve().then(console.log('first microtask'));
Promise.resolve().then(console.log('second microtask'));

// Output:
// first microtask
// second microtask
// first normal task
// second normal task

