doSomething(function () {
  doNext(function () {
    doAnother(function () {
      // 😵 ye kya ho raha hai!
    });
  });
});

// Jab bahut saare callbacks nested ho jate hain, to code messy ho jata hai. Usko hi callback hell kehte hain.

// Isiliye, Promises aur async/await aaye — taaki ye code readable ho.