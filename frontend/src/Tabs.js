import {useState} from "react";

const todoItems = [
    {
        id: 1,
        title: "Go to Market",
        description: "Buy ingredients to prepare dinner",
        completed: true,
    },
    {
        id: 2,
        title: "Study",
        description: "Read Algebra and History textbook for the upcoming test",
        completed: false,
    },
    {
        id: 3,
        title: "Sammy's books",
        description: "Go to library to return Sammy's books",
        completed: true,
    },
    {
        id: 4,
        title: "Article",
        description: "Write article on how to use Django with React",
        completed: false,
    },
];
  export default function Tab(item, modalToggle) {
      const [viewCompleted, setViewCompleted] = useState(false);
      const [activeItem, setActiveItem] = useState(item)

      function editItem(item) {
          setActiveItem(item);
          modalToggle();
      }

      function deleteItem(item) {
          alert("delete" + JSON.stringify(item));
      }

      function renderTabList() {
          return (
              <div className="nav nav-tabs">
                <span className={viewCompleted ? "nav-link active" : "nav-link"} onClick={() => setViewCompleted(true)}>
                  Complete
                </span>
                <span className={viewCompleted ? "nav-link" : "nav-link active"} onClick={() => setViewCompleted(false)}>
                  Incomplete
                </span>
              </div>
          );
      }
      function renderItems(todoList) {
          const newItems = todoList.filter(
              (item) => item.completed === viewCompleted
          );

          return newItems.map((item) => (
              <li  key={item.id}  className="list-group-item d-flex justify-content-between align-items-center">
            <span className={`todo-title mr-2 ${viewCompleted ? "completed-todo" : ""}`} title={item.description}>
              {item.title}
            </span>
                  <span>
              <button className="btn btn-secondary mr-2" onClick={() => editItem(item)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => deleteItem(item)}>
                Delete
              </button>
            </span>
              </li>
          ));
      }

      return (
          <div>
              {renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                  {renderItems(todoItems)}
              </ul>
          </div>
    )
}
