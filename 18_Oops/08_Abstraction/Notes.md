### **Lecture Notes: Abstraction in JavaScript**

**Abstraction** is one of the key principles of Object-Oriented Programming (OOP). In simple terms, abstraction is the concept of **hiding complex implementation details** and showing only the essential features of an object or function. This allows the user to interact with an object or function without needing to understand the complexities behind it.

In JavaScript, abstraction can be achieved using **abstract classes** (in languages that support it directly) or by **hiding implementation details** using methods and properties that are not exposed directly to the outside world. While JavaScript doesn't have built-in support for abstract classes, we can simulate abstraction using **classes**, **methods**, and **getter/setter** methods.

---

### **Key Concepts of Abstraction**

1. **Hiding Complexity**: Exposing only the necessary information to the user while hiding the internal workings of an object.
2. **Public Interface**: Providing a simple and clean interface to interact with an object.
3. **Encapsulation**: Often used alongside abstraction to hide the internal details of an object, thus providing a clean interface.

In JavaScript, **abstraction** is achieved using:
- **Methods** that hide the implementation.
- **Private properties** (using closures or the `#` symbol for private fields in modern JavaScript).
- **Encapsulation** (hiding data behind getter and setter methods).

---

### **Example of Abstraction in JavaScript**

Let’s consider a simple example where we create a **BankAccount** class that abstracts the implementation details of depositing and withdrawing money, but only exposes the **deposit** and **withdraw** methods to the user.

#### Code Example: Simulating Abstraction in JavaScript

```javascript
class BankAccount {
    // Private property (using closure technique for abstraction)
    #balance;  // Private property to store the balance

    constructor(owner, initialDeposit = 0) {
        this.owner = owner;  // Public property for account owner
        this.#balance = initialDeposit;  // Initialize balance with an initial deposit (private)
    }

    // Public method to deposit money
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be positive.");
        } else {
            this.#balance += amount;  // Modify the private balance
            console.log(`Deposited ₹${amount}. Current balance: ₹${this.#balance}`);
        }
    }

    // Public method to withdraw money
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
        } else if (amount > this.#balance) {
            console.log("Insufficient balance.");
        } else {
            this.#balance -= amount;  // Modify the private balance
            console.log(`Withdrew ₹${amount}. Current balance: ₹${this.#balance}`);
        }
    }

    // Public method to check balance (getter)
    checkBalance() {
        return `Current balance: ₹${this.#balance}`;  // Return private balance
    }
}

// Creating an instance of BankAccount
const myAccount = new BankAccount("Ravi", 1000);

// Performing some actions on the account
myAccount.deposit(500);  // Output: Deposited ₹500. Current balance: ₹1500
myAccount.withdraw(200);  // Output: Withdrew ₹200. Current balance: ₹1300
console.log(myAccount.checkBalance());  // Output: Current balance: ₹1300

// Attempt to directly access the private balance (will not work)
console.log(myAccount.#balance);  // SyntaxError: Private field '#balance' must be declared in an enclosing class
```

---

### **Explanation of the Example**

1. **Private Properties**:
   - In this example, the `#balance` is a **private field**. It cannot be accessed or modified directly outside the class. This is an example of **hiding complexity**. Users can interact with the `deposit()`, `withdraw()`, and `checkBalance()` methods, but they cannot directly manipulate the balance, which is hidden.

2. **Public Methods**:
   - The methods `deposit()`, `withdraw()`, and `checkBalance()` are **public methods** that users can use to interact with the `BankAccount` class. These methods abstract away the underlying complexity of how the balance is managed.

3. **Encapsulation**:
   - The **encapsulation** concept is used to **protect the internal state** of the object (`#balance`) from being directly changed. Users can only modify the balance through the provided public methods, which helps ensure that the state remains valid (e.g., no negative balance).

4. **Abstraction**:
   - The main point of abstraction here is that the user doesn't need to know how the `BankAccount` class manages the balance internally. They only need to use the public methods to deposit, withdraw, and check the balance. The complexity of managing the balance is hidden inside the class.

---

### **Key Benefits of Abstraction**

1. **Simplicity**: The user doesn’t need to understand complex code to use the object. They can interact with a clean, simple interface.
2. **Maintenance**: Since the internal details are hidden, we can change the implementation without affecting the users of the class.
3. **Security**: Abstraction helps to protect sensitive data (like the balance in a bank account) from being accessed or changed directly.
4. **Reusability**: Abstract classes can be reused across various parts of the program without exposing the complexity.

---
