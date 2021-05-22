
import './App.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';

function App() {

  const data = [
    {
      name: 'Sowmya',
      age: 20, 
      city: 'Pune',
      key: '1'
    },
    {
      name: 'Sanjana',
      age: 20, 
      city: 'Kolkata',
      key: '2'
    },
    {
      name: 'Sravani',
      age: 21, 
      city: 'Guntur',
      key: '3'
    },
    {
      name: 'Soujanya',
      age: 14, 
      city: 'Mumbai',
      key: '4'
    }
  ]

  const columns = [
    {
      title: 'Name', 
      dataIndex: 'name', 
      key: 'key'
    },
    {
      title: 'Age', 
      dataIndex: 'age', 
      key: 'key',
      sorter: (a, b) => a.age - b.age
    },
    {
      title: 'City', 
      dataIndex: 'city', 
      key: 'key'
    },
    {
      title: 'Eligibility to vote', 
      key: 'key',
      render: payload => {
        return <p>{payload.age>18?'Yes':'No'}</p>
      }
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{color: "blue"}}> Table Using Antd</h1>
      <Table className="table table-striped table-hover table-responsive" style = {{fontFamily: "verdana",width: "auto", border: "2px solid black"}}
      dataSource={data}
      columns={columns}
      rowClassName={(record, index) => (record.key % 2 === 0 ? "blue" : "grey")}
      >
      </Table>
      </header>
    </div>
  );
}

export default App;
