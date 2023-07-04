import React, {useState} from "react";
import Tab from "./Tabs";
import CustomModal from "./CustomModal";
import useModal from "./useModal";

function App() {

    const [activeItem, setActiveItem] = useState({ title: "", description: "", completed: false });
    const {isShowing, toggle} = useModal();

    function createItem() {
        const item = { title: "", description: "", completed: false };
        setActiveItem(item);
        toggle();
    }

    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button className="btn btn-primary" onClick={() => createItem()}>
                  Add task
                </button>
                {Tab(activeItem, toggle)}
              </div>
            </div>
          </div>
        </div>
          <CustomModal isShowing={isShowing} hide={toggle} item={activeItem} />
      </main>
  );
}
export default App;