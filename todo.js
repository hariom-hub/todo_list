let todo = [];

while (true) {
  let req = prompt("Please enter a command (add/list/delete/quit):");

  if (req === "quit") {
    console.log("Quitting the app");
    break;
  } else if (req === "list") {
    console.log("-------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i + ": " + todo[i]);
    }
    console.log("-------");
  } else if (req === "add") {
    let addTask = prompt("Please enter the task you want to add:");
    todo.push(addTask);
    console.log("Task added");
  } else if (req === "delete") {
    let idx = prompt("Please enter the index of the task you want to delete:");
    if (idx >= 0 && idx < todo.length) {
      todo.splice(idx, 1);
      console.log("Task deleted");
    } else {
      console.error("Invalid index");
    }
  } else {
    console.error("Invalid command");
  }
}
