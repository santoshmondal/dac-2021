class Second {
  static main(args) {
    console.log("Hello World Like Java");
  }

  hello() {
    console.log("Hello Pranit");
  }
}

// Calling Static method
Second.main();

// Instance Method
let second = new Second();
second.hello();
