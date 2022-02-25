import React, { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  // if (JSON.parse(window.localStorage.getItem("jab")) == "NULL") setpeople([]);
  const [disp, setdisp] = useState(true);
  const [people, setpeople] = useState(
    JSON.parse(window.localStorage.getItem("form"))
  );
  // useEffect(() => {
  //   window.localStorage.setItem("form", JSON.stringify([]));
  // });
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <button className="btn btn-success" onClick={() => setdisp(true)}>
              Form
            </button>
          </div>
          <div class="col">
            <button className="btn btn-success" onClick={() => setdisp(false)}>
              Table
            </button>
          </div>
        </div>

        {disp ? <Form setpeople={setpeople} people={people} /> : <Table />}
      </div>
    </>
  );
}
export default App;
