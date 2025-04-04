setTimeout(() => {
  console.log("1st Task done");
  setTimeout(() => {
    console.log("2nd Task done");
    setTimeout(() => {
      console.log("3rd Task done");
      setTimeout(() => {
        console.log("4th Task done");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
