import React from "react";

const MyList = ({ selected, list, completeTask }) => {
  return (
    <>
      {list.map((item, index) => {
        return (
          <>
            {selected === "all" ||
            (selected === "completed" && item.completed) ||
            (selected === "active" && !item.completed) ? (
              <div className="todo-item">
                <input
                  className="todo-check"
                  type="checkbox"
                  id="vehicle3"
                  name="vehicle3"
                  value="Boat"
                  checked={item.completed}
                  onClick={() => completeTask(item.title)}
                />

                <span
                  className={`todo-title ${item.completed ? "finished" : ""}`}
                >
                  {item.title}{" "}
                </span>
              </div>
            ) : null}
          </>
        );
      })}
    </>
  );
};

export default MyList;
