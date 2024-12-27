import { useState } from "react";

export default function Bankform() {
  const [name, setname] = useState("");
  console.log(name);
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
        margin:"auto",
        backgroundColor:"blue",
        borderRadius:'5rem'

      }}
    >
      <h1 style={{margin:"auto"}}>Account Request</h1>

      <br />
      <form
        style={{
          padding: "40px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          border:"5rem",
        }}
      >
          <input
            onChange={(e) => {
              setname(e.target.value);
            }}
            type="text"
            placeholder="name"
          />
          <input type="text" placeholder="Phone" />
          <input  type="number" placeholder="Age" />
          <label htmlFor="">Are you a member in our bank</label>
          <input type="checkbox" />
          <label htmlFor="">Salary </label>
          <select>
<option value="">Less than 500$</option>
<option value="">between 500$ and 700$</option>
<option value="">above 2000$</option>
<button>submit</button>

          </select>
          <button style={{padding:'0.5rem',maginTop:"0.5rem"}}>Submit</button>
      </form>
    </div>
  );
}
