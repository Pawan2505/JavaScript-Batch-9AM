let user = {
  username: "pawan123",
  greet: function () {
    return "Hello, " + this.username;
  },
};

console.log(user.greet());
