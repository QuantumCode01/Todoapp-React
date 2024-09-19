import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {
    const [task, setTask] = useState([]);
    const [enteredValue, setEnteredValue] = useState('');
  
    const addTask = (e) => {
      e.preventDefault();
      if (enteredValue.trim() === '') return;
      setTask([...task, enteredValue]);
      setEnteredValue(''); 
    };
  
    const taskRemove = (index) => {
      const updatedTask =  [...task.slice(0, index), ...task.slice(index + 1)];
      setTask(updatedTask);
    };
        return (
          <>
          <div className="container">
          <h1>Todo App</h1>
         <form className="form-inline d-flex justify-content-between">
            <div className="form-group">
              <input type="text" value={enteredValue} onChange={(e) => setEnteredValue(e.target.value)} className="form-control" id="exampleInputName2" placeholder="Add Task" />
            </div>
            <button type="button" onClick={addTask} className="addbtn btn btn-primary">Add</button>
        </form>
           <hr />

            {task.map((curval, index) => (
              <div className="task-line d-flex justify-content-evenly mt-2">
                <p className="indexing" >{index+1}</p>
                <p className="task-name w-50" >{curval}</p>
                <button onClick={() => taskRemove(index)} className="removebtn btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
              </div>
            ))}
          </div>
        </>
        );
    }

export default App;
