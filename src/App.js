import React, {Component} from 'react';
import './App.css';
import DataService from './DataService';
import AddPerson from './AddPerson';

class App extends Component {
  constructor(){
    super();
    this.state={
      records:[]
    }

    DataService.getAllRecords().then(response=>{
      this.setState({
        records:response.data
      })
    })  
  }

  render() {

    return (
      <div className="App">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Reg. Number</th>
              <th scope="col">Name</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
          {this.state.records.map((record, i) => {
            return(
              <tr key={i}>
                <th>{record.regno}</th>
                <td>{record.name}</td>
                <td>
                  <button className="btn btn-outline-secondary">Details</button>
                  <button className="btn btn-warning mx-2">Update</button>
                  <button type="button" id={record.regno} className="btn btn-danger" onClick={()=>{
                    DataService.deleteRecord(record.regno).then(() =>{
                      DataService.getAllRecords().then(response=>{
                        this.setState({
                          records:response.data
                        })
                      })
                    });
                  }}>Delete</button>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
        <AddPerson></AddPerson>
      </div>
    );
  }
}

export default App;
