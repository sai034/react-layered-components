import React, { useState, createContext } from 'react';
import './App.css';
import Table from './components/Table';
import TableWithContext from './components/TableWithContext';

export const StudentDataContext = createContext()

function App() {
  const [ isButton1Active, setIsButton1Active ] = useState(false);
  const [ isButton2Active, setIsButton2Active ] = useState(false);
  const [ isButton3Active, setIsButton3Active ] = useState(false);

  const studentsData = [
    {
      name: 'Sai',
      age: 21,
      status: 'Active',
      enrolledIn: 2020,
      marks: 83,
    },
    {
      name: 'Veda',
      age: 21,
      status: 'Active',
      enrolledIn: 2013,
      marks: 80,
    },
    {
      name: 'Cvr',
      age: 21,
      status: 'Active',
      enrolledIn: 2012,
      marks: 75,
    },
    {
      name: 'Aditya',
      age: 21,
      status: 'Inactive',
      enrolledIn: 2010,
      marks: 35,
    },
    {
      name: 'Ram',
      age: 21,
      status: 'Active',
      enrolledIn: 2020,
      marks: 93,
    },
  ]

  const handleButton1Click = () => {
    setIsButton1Active(true);
    setIsButton2Active(false);
    setIsButton3Active(false);
  } 

  const handleButton2Click = () => {
    setIsButton1Active(false);
    setIsButton2Active(true);
    setIsButton3Active(false);
  } 

  const handleButton3Click = () => {
    setIsButton1Active(false);
    setIsButton2Active(false);
    setIsButton3Active(true);
  } 
  
  return (
    <div className="App">
      <button onClick={handleButton1Click}>Button 1</button>
      <button onClick={handleButton2Click}>Button 2</button>
      <button onClick={handleButton3Click}> Button 3</button>
    { isButton1Active && <Table studentsData = {studentsData} />}
    { isButton2Active && <h1>No Data Found</h1> }
    { isButton3Active &&
      <StudentDataContext.Provider value={studentsData}>
        <TableWithContext />
      </StudentDataContext.Provider>
    }
    </div>
  );
}

export default App;
