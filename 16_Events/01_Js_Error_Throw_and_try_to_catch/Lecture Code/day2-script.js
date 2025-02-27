// Example 1: Basic try-catch block to handle undefined variable
try {
  console.log(x); // x is not defined
} catch (error) {
  console.log(error.message); // Catch and log the error message
}

// Example 2: Creating an array with a negative size (invalid operation)
try {
  let arr = new Array(-5); // Invalid array size
  console.log(arr);
} catch (error) {
  console.log(error.message); // Catch and log the error message
}

// Example 3: Manually throwing an error for invalid condition
try {
  let num = 12;

  if (num < 0) {
    throw new Error("Num should be greater than zero"); // Custom error
  }
} catch (error) {
  console.log(error.message); // Catch and log the error message
}

// Example 4: Catching specific error type (SyntaxError)
try {
  console.log(x); // Undefined variable
  throw new SyntaxError("This is a custom syntax error"); // Custom error
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("Caught a syntax error:", error.message); // Handle SyntaxError
  } else {
    console.log("Caught some other error:", error.message); // Handle other errors
  }
}

// Example 5: Similar to the previous example but with a missing parenthesis
try {
  console.log("0"); // Missing parenthesis
  throw new SyntaxError("This is a custom syntax error");
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("Caught a syntax error:", error.message); // Handle SyntaxError
  } else {
    console.log("Caught some other error:", error.message); // Handle other errors
  }
}

// Example 6: Handling TypeError (undefined object property access)
try {
  let obj;
  console.log(obj.message); // This will throw a TypeError
} catch (error) {
  console.log(error.name); // TypeError name
  console.log(error.message); // Detailed error message
  console.log(error.stack); // Error stack trace
}

// Example 7: Basic try-catch with a finally block
try {
  let x;
  console.log(x); // Undefined variable
} catch (error) {
  console.log(error.message); // Catch and log the error message
} finally {
  console.log("Cleanup.."); // This block will always execute
}

// Example 8: Function demonstrating the use of finally block
function testFinally() {
  try {
    console.log("Inside try block"); // Normal execution
    // Uncomment the next line to see the catch block in action
    // throw new Error("An error occurred");
  } catch (error) {
    console.log("Inside catch block: " + error.message); // Error handling
  } finally {
    console.log("This is always executed, in the finally block."); // Always executed
  }
}

testFinally(); // Calling the function to see the result
