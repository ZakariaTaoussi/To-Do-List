import React, { useState } from 'react';
import './ToDoList.css'
const ToDoList = () => {
    const [task, newTask] = useState([]);
    const [newInput, setNewInput] = useState("");

    function handleChange(event) {
        setNewInput(event.target.value);
    }

    function addTask() {
        if(newInput.trim()!==""){
        newTask(prevTask => [...prevTask, newInput]);
        setNewInput("");
        }
    }

    function moveUp(index) {
        // Implementation to move task up
        if (index > 0) {
            const updatedTasks = [...task];
            // Swap the elements at index and index - 1
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            newTask(updatedTasks);
        }
    }
    
    function deleteTask(index) {
        // Implementation to delete task
        /*You click the delete button for a specific task, say the task at index 3.
The deleteTask function is called with the index 3.
Inside deleteTask, the filter() method is called on the task array.
For each element in the task array, the callback function checks if its index i 
is not equal to the provided index 3.
If the index i is not equal to 3, the task is included in the updatedTask array.
If the index i is equal to 3, the task is excluded from the updatedTask array.*/
        const updateTask = task.filter((_,i)=> i !==index)
        newTask(updateTask)
    }

    function moveDown(index) {
        // Implementation to move task down
        if (index < task.length -1) {
            const updatedTasks = [...task];
            // Swap the elements at index and index - 1
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            newTask(updatedTasks);
        }
    }

    return (
        <div className='todolist'>
            <h1>To-Do-List</h1>

            <div>
                <input type="text"
                    placeholder='Enter a Task'
                    value={newInput} onChange={handleChange}>
                </input>
                <button onClick={addTask}>Add</button>
            </div>
            <div>
                <ol>
                    {task.map((taskItem, index) =>
                        <li key={index}>
                            <span className='Task'>{taskItem}</span>
                            <button onClick={() => deleteTask(index)} className='DeleteBtn'>Delete</button>
                            <button onClick={() => moveUp(index)} className='MoveUpBtn'>Up</button>
                            <button onClick={() => moveDown(index)} className='DownUpBtn'>Down</button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;
