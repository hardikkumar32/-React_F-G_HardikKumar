import React, { useEffect, useState } from "react";
import Msg from "./msg";
function Form({ setpeople, people }) {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    phone: "",
    textfield: "",
  });
  const [msg, setmsg] = useState(false);
  useEffect(() => {
    window.localStorage.setItem("form", JSON.stringify(people));
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.phone && person.textfield) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setpeople([...people, newPerson]);
      setPerson({ name: "", email: "", phone: "", textfield: "" });
      console.log(people);
      setmsg(true);
    }
  };
  // const Formcontroller = () => {
  //   return (
  //     <div>
  //       <form>
  //         <div>
  //           <label htmlFor="name">Name : </label>
  //           <input
  //             type="text"
  //             id="name"
  //             name="name"
  //             value={person.name}
  //             onChange={handleChange}
  //           />
  //         </div>
  //         <div>
  //           <label htmlFor="email">Email : </label>
  //           <input
  //             type="email"
  //             id="email"
  //             name="email"
  //             value={person.email}
  //             onChange={handleChange}
  //           />
  //         </div>
  //         <div>
  //           <label htmlFor="phone">Phone : </label>
  //           <input
  //             type="number"
  //             id="phone"
  //             name="phone"
  //             value={person.phone}
  //             onChange={handleChange}
  //           />
  //         </div>
  //         <button type="submit" onClick={handleSubmit}>
  //           Submit
  //         </button>
  //       </form>
  //     </div>
  //   );
  // };
  // return <>{msg ? <Msg setmsg={setmsg} /> : <Formcontroller />}</>;
  return (
    <>
      <div>
        <form>
          <div>
            <label htmlFor="textfield">Textfield</label>
            <input
              type="text"
              id="textfield"
              name="textfield"
              value={person.textfield}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="name" class="form-label">
              Name :{" "}
            </label>
            <input
              class="form-control"
              type="text"
              id="name"
              name="name"
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="email" class="form-label">
              Email :{" "}
            </label>
            <input
              class="form-control"
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone : </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={person.phone}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      {msg ? <Msg setmsg={setmsg} /> : <></>}
    </>
  );
}
export default Form;
