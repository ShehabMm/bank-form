import { useState } from "react";
import Modal from "./Modal";

export default function Bankform() {
  const [inputs, setinputs] = useState({
    name: "",
    show: false,
    phone: "",
    age: "",
    ischecked: false,
    salary: "",
  });
  const [err, seterr]= useState(null)

  const submit = (e) => {
    e.preventDefault();
    setinputs({ ...inputs, show: true });
    console.log(inputs);
    seterr(null)
    if (inputs.age <18 || inputs.age>100) {
        seterr(true)
    }

  };

  if (inputs.show) {
    setTimeout(() => {  setinputs({...inputs, show:false}) }, 2000)
   
  }
  return (
    <div
      style={{
        padding: "10rem",
        maxWidth: "50%",
        minHeight: "500px",
        border: "5px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        margin: "auto",
        backgroundColor: "blue",
        borderRadius: "5rem",
      }}
    >
      <h1 style={{ margin: "auto" }}>Account Request</h1>

      <br />
      <form
        style={{
          padding: "40px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          border: "5rem",
        }}
        onSubmit={submit}
      >
        <input
          onChange={(e) => {
            setinputs({ ...inputs, name: e.target.value });
          }}
          type="text"
          placeholder="name"
          value={inputs.name}
        />
        <input
          onChange={(e) => {
            setinputs({ ...inputs, phone: e.target.value });
          }}
          type="text"
          placeholder="Phone"
          value={inputs.phone}
        />
        <input
          onChange={(e) => {
            setinputs({ ...inputs, age: e.target.value });
          }}
          type="number"
          value={inputs.age}
          placeholder="Age"
        />
        <label htmlFor="">Are you a member in our bank</label>
        <input
          onChange={(e) => {
            setinputs({ ...inputs, ischecked: e.target.checked });
          }}
          checked={inputs.ischecked}
          type="checkbox"
        />
        <label htmlFor="">Salary </label>
        <select
          value={inputs.salary}
          onChange={(e) => {
            setinputs({ ...inputs, salary: e.target.value });
          }}
        >
          <option>Less than 500$</option>
          <option>between 500$ and 700$</option>
          <option>above 2000$</option>
          <button>submit</button>
        </select>
        <>
          <button
            style={
              inputs.name == ""
                ? { backgroundColor: "grey" }
                : { backgroundColor: "red" }
            }
            disabled={
              inputs.name == "" || inputs.age == "" || inputs.phone == ""
            }
          >
            Submit
          </button>
        </>
      </form>

      {inputs.show ? <Modal  errorrmessage={err} /> : ""}
    </div>
  );
}
