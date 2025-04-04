function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited for ${ms} ms`);
    }, ms);
  });
}

delay(2000).then((msg) => console.log(msg));
