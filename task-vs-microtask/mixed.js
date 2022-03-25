setTimeout(() => console.log('first task'), 0);
setTimeout(() => console.log('second task'), 0);
// buried microtask gets called at the end
setTimeout(() => setTimeout(() => Promise.resolve().then(() => console.log('buried microtask')), 0), 0);
setTimeout(() => Promise.resolve().then(() => console.log('first microtask')), 0);
setTimeout(() => Promise.resolve().then(() => console.log('second microtask')), 0);

// Output
// first task
// second task
// first microtask
// second microtask
// buried microtask

