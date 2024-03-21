import React, { useEffect } from "react";
import { TableCell, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Update() {
  const [updateid,setUpdateID] = useState(null)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setcheckBox] = useState(false);

  const UpdateData = () => {
    
    axios.put(`https://65e98965c9bf92ae3d396ddd.mockapi.io/fakeApi/${updateid}`, {
      firstName,
      lastName,
      checkbox,
    });
  };

  useEffect(()=>{
    setUpdateID(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('First_Name'))
    setLastName(localStorage.getItem('Last_Name'))
    setcheckBox(localStorage.getItem('checkbox'))
  },[])
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
            checked={true}
            value={checkbox}
            onChange={() => setcheckBox(!checkbox)}
          />
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div> 
      {/* <TableHeaderCell>Update</TableHeaderCell> */}
      <Link to= '/read'>
      <TableCell>
        <Button onClick={()=> UpdateData()}>Update</Button>
      </TableCell>
      </Link>
    </form>
    </div>
  );
}

export default Update;
