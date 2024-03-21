import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setcheckBox] = useState(false);

  const postData = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setcheckBox(false);
    
    axios.post(`https://65e98965c9bf92ae3d396ddd.mockapi.io/fakeApi`, {
      firstName,
      lastName,
      checkbox,
    }).then(()=>{
    navigate('/read')
    });
  };
 
  return (
    <div>
          <form className="ui form">
      <div className="field">
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          name="first-name"
          placeholder="First Name"
        />
      </div>
      <div className="field">
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          name="last-name"
          placeholder="Last Name"
        />
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input
            type="checkbox"
            checked={checkbox}
            value={checkbox}
            onChange={(e) => setcheckBox(!checkbox)}
          />
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button className="ui button" onClick={postData} type="submit">Create</button>
      {/* <Link to= '/read'>
      <TableCell>
        <Button className="ui button" type="submit">Read Data</Button>
      </TableCell>
      </Link> */}
      {/* <div className="ui form success">
        <div className="ui success message hidden">
          <div className="header">Form Completed</div>
          <p>You're all signed up for the newsletter.</p>
        </div>
      </div> */}
    </form>
    </div>
  );
}

export default Create;
