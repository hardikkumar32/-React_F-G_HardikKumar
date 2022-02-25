import React, { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import "./index.css";
function App() {
  const [disp, setdisp] = useState(true);
  const [people, setpeople] = useState([]);
  useEffect(() => {
    let item = window.localStorage.getItem("form");
    if (item == null) window.localStorage.setItem("form", JSON.stringify([]));
    else setpeople(JSON.parse(item));
  }, []);
  return (
    <>
      <div className="main">
        <div className="row">
          <div className="col">
            <div className="btn1 btn-form">
              <button className="btn" onClick={() => setdisp(true)}>
                Form
              </button>
            </div>
            <div className="btn1 btn-table">
              <button className="btn" onClick={() => setdisp(false)}>
                Table
              </button>
            </div>
          </div>
        </div>

        {disp ? (
          <Form setpeople={setpeople} people={people} />
        ) : (
          <Table people={people} />
        )}
      </div>
    </>
  );
}
export default App;
