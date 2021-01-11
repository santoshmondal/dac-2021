// Global Scope
let str = "Hello";

for (let i = 0; i < 2; i++) {
  let str = "Again";
  console.log(i, str);
}

for (let i = 0; i < 10; i++) {
  // why this statment work
  // Block Scope
  let str = "World";

  console.log(i, str);
}
