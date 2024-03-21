import axios from "axios";
import { useState, useEffect } from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

function Read() {
  const [APIData, setAPIData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`https://65e98965c9bf92ae3d396ddd.mockapi.io/fakeApi`)
        .then((resp) => {
          setAPIData(resp.data);
          setIsLoading(false)
        });
      }, 3000);
    }, []);

    const setData = (myData) => {
    const {id,firstName,lastName,checkbox} = myData;
    localStorage.setItem('ID', id)
    localStorage.setItem('First_Name', firstName)
    localStorage.setItem('Last_Name', lastName)
    localStorage.setItem('checkbox', checkbox)
  };
  const deleteId = (id) => {
    axios.delete(`https://65e98965c9bf92ae3d396ddd.mockapi.io/fakeApi/${id}`)
   .then(()=> {
    getData();
   })
  } 
const getData = ()=> {
  axios.get(`https://65e98965c9bf92ae3d396ddd.mockapi.io/fakeApi`)
    .then((getData)=> {
      setAPIData(getData.data)
    })
}

  return (
    <div>
      {isLoading ? (
        <div className="ui icon message">
        <i className="notched circle loading icon"></i>
        <div className="content">
          <div className="header">
            Just one second
          </div>
          <p>We're fetching that content for you.</p>
        </div>
      </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>First Name</TableHeaderCell>
              <TableHeaderCell>Last Name</TableHeaderCell>
              <TableHeaderCell>Check Box</TableHeaderCell>
              <TableHeaderCell >Update</TableHeaderCell>
              <TableHeaderCell>Delete</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {APIData.map((myData) => {
              
              return (
                <TableRow key={myData.id}>
                  <TableCell>{myData.firstName}</TableCell>
                  <TableCell>{myData.lastName}</TableCell>
                  <TableCell>
                    {myData.checkbox ? "checked" : "unchecked"}
                  </TableCell>
                  <Link to="/update">
                    <TableCell>
                      <Button onClick={() => setData(myData)}>Update</Button>
                    </TableCell>
                  </Link>
                  <TableCell>
                      <Button onClick={() => deleteId(myData.id)}>Delete</Button>
                    </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

      )}
    </div>
  );
     } 
        
  

export default Read;
