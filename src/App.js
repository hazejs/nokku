import './App.scss';
import { Card } from './components/Card';
import { Innerbox } from './components/Innerbox';
import {chartsData, tableData} from './helpers/consts'
import { MdNotificationImportant, MdOutlineSearch } from 'react-icons/md';


const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <MdNotificationImportant style={{cursor: 'pointer', color: '#cbcbcb', marginLeft: 7}} size="35"/>
        <MdOutlineSearch style={{cursor: 'pointer', color: '#cbcbcb', marginLeft: 7}} size="35"/>
      </header>
      <div className="app-container">
        <div className="charts-container">
          {chartsData.map(n => {
            return (
              <Card title={n.title} val={n.value} key={n.id}>
                <Innerbox obj={n}/>
              </Card>
            )
          })}
        </div>
        <div className="table-container">
          <div className="table-title">
            <h2>Campaigns</h2>
            <span className="dots">...</span>
          </div>
          <table className="table">
            
            <thead className="table-head">
              <tr>
                <th>#</th>
                <th>Brand</th>
                <th>StartDate</th>
                <th>EndDate</th>
                <th>Status</th>
                <th>Assign</th>
              </tr>
            </thead>
            
            <tbody className="table-body">
              {tableData.map(d => {
                let status = d.status === 1 ? 'Active' : 'In Review'
              return(
              
                <tr className="table-data-row" key={d.id}>
                  <td><b>{d.id}</b></td>
                  <td>{d.brand}</td>
                  <td>{d.startDate}</td>
                  <td>{d.endDate}</td>
                  <td>
                    <span className="row-status" style={d.status === 1 ? 
                      {color: '#58f9d0', background: '#eafff8'}:
                      {color: '#ff5c6d', background: '#ffe7ea'}}>
                      {status}
                    </span>
                  </td>
                  <td>{d.assign}</td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
     
    </div>
  );
}

export default App;
