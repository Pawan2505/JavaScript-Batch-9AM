function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function doTasks() {
  console.log("Task 1 start");
  await wait(1000); // wait for 1 second
  console.log("Task 1 done");

  console.log("Task 2 start");
  await wait(1000);
  console.log("Task 2 done");

  console.log("All tasks done");
}

doTasks();
