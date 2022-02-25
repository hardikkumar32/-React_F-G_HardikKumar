import React, { useState } from "react";
import Msg from "./msg";
function Form({ setpeople, people }) {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    phone: "",
    textfield: "",
  });
  const [msg, setmsg] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.phone && person.textfield) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      let newpeople = [...people, newPerson];
      setpeople(newpeople);
      setPerson({ name: "", email: "", phone: "", textfield: "" });
      setmsg(true);
      window.localStorage.setItem("form", JSON.stringify(newpeople));
    }
  };
  return (
    <>
      <div className="container">
        <h2 className="arom">Aromatic bar</h2>
        <p className="u-para">
          We are committed to providing you with the best dining experience
          possible, so we welcome your comments. Please fill out this
          questionnaire. Thank you.
        </p>
        <div className="box">
          <form class="row g-3">
            <div class="col-md-6">
              <label htmlFor="textfield" class="form-label">
                Textfield
              </label>
              <input
                class="form-control"
                type="text"
                id="textfield"
                name="textfield"
                value={person.textfield}
                onChange={handleChange}
                required
              />
            </div>
            <div class="col-md-6">
              <label class="form-label" htmlFor="name">
                Name :{" "}
              </label>
              <input
                class="form-control "
                type="text"
                id="name"
                name="name"
                value={person.name}
                onChange={handleChange}
                required
              />
            </div>
            <div class="col-md-6">
              <label class="form-label" htmlFor="email">
                Email :{" "}
              </label>
              <input
                class="form-control"
                type="email"
                id="email"
                name="email"
                value={person.email}
                onChange={handleChange}
                required
              />
            </div>
            <div class="col-md-6">
              <label class="form-label" htmlFor="phone">
                Phone :{" "}
              </label>
              <input
                class="form-control"
                type="number"
                id="phone"
                name="phone"
                value={person.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <p className="para">
                {" "}
                Please rate the quality of the service you received from your
                host
              </p>
              <div className="radio-btns">
                <div className="r-btn">
                  <input type="radio" name="feedback" id="excellent" />
                  <label htmlFor="excellent">Excellent</label>
                </div>
                <div className="r-btn">
                  <input type="radio" name="feedback" id="good" />
                  <label htmlFor="good">Good</label>
                </div>
                <div className="r-btn">
                  <input type="radio" name="feedback" id="fair" />
                  <label htmlFor="fair">Fair</label>
                </div>
                <div className="r-btn">
                  <input type="radio" id="bad" name="feedback" />
                  <label htmlFor="bad">Bad</label>
                </div>
              </div>
            </div>
            {msg ? <Msg setmsg={setmsg} /> : <></>}
            <div className="col-12">
              <button
                className="btn btn-success btn-submit"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Form;
