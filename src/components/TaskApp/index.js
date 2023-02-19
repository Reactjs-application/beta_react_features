import React, { useState } from "react";

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);
  const [text, setText] = useState("");

  function handleAddTask(e) {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
        toggle: false,
      },
    ]);
    setText("");
  }

  function hanldeDeleteTask(id) {
    setTasks(
      tasks.filter((val) => {
        return val.id !== id;
      })
    );
  }

  function handleChangesTask(value, id) {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          text: value,
        };
      } else {
        return item;
      }
    });
    setTasks(newTasks);
  }

  function hanldeToggleTask(bool, id) {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          toggle: !bool,
        };
      } else {
        return item;
      }
    });
    setTasks(newTasks);
  }

  return (
    <div>
      <h3>Prague itinerary</h3>
      <AddTask setText={setText} handleAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        handleChanges={handleChangesTask}
        hanldeDelete={hanldeDeleteTask}
        hanldeToggle={hanldeToggleTask}
      />
    </div>
  );
}

function AddTask({ handleAddTask, setText }) {
  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button>add</button>
      </form>
    </div>
  );
}

function TaskList({ tasks, handleChanges, hanldeDelete, hanldeToggle }) {
  return (
    <div className="text_list">
      <ul>
        {tasks.map((item) => {
          return (
            <li key={item.id} style={{ marginTop: "10px" }}>
              {item.toggle ? (
                <>
                  <input
                    type="text"
                    value={item.text}
                    onChange={(e) => handleChanges(e.target.value, item.id)}
                  />
                  <button
                    onClick={() => hanldeToggle(item.toggle, item.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    save
                  </button>
                </>
              ) : (
                <>
                  <p>{item.text}</p>
                  <button onClick={() => hanldeToggle(item.toggle, item.id)}>
                    Exit
                  </button>
                </>
              )}

              <button
                onClick={() => hanldeDelete(item.id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

let nextId = 3;
let initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: false, toggle: false },
  { id: 1, text: "Watch a puppet show", done: false, toggle: false },
  { id: 2, text: "Lennon Wall pic", done: false, toggle: false },
];
