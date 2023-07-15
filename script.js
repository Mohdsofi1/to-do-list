document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task-input");
  const addBtn = document.getElementById("add-btn");
  const taskList = document.getElementById("task-list");

  addBtn.addEventListener("click", function () {
    const taskTitle = taskInput.value.trim();
    if (taskTitle !== "") {
      const taskId = Date.now();
      const taskItem = createTaskElement(taskId, taskTitle);
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.matches(".delete-btn")) {
      const taskItem = target.closest("li");
      taskItem.remove();
    } else if (target.matches(".checkbox")) {
      const taskItem = target.closest("li");
      taskItem.classList.toggle("completed");
    }
  });

  function createTaskElement(taskId, taskTitle) {
    const li = document.createElement("li");
    li.classList.add("task-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    const span = document.createElement("span");
    span.textContent = taskTitle;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    const taskActions = document.createElement("div");
    taskActions.classList.add("task-actions");
    taskActions.appendChild(checkbox);
    taskActions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(taskActions);

    return li;
  }
});
