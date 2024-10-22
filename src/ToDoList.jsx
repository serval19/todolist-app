import React, {useState} from 'react';
function ToDoList(){
    const [tasks,setTasks]=useState(["Eat breakfast","take shower"])
    const [newTask,setNewTask]=useState("")
    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    
    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
        
    }
    function deleteTask(index){
        const updatedTasks=tasks.filter((element,i)=> i!==index);
        setTasks(updatedTasks);
    }
    function movetaskup(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks);
        }

    }
    function movetaskdown(index){
        
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    return(<div className='to-do-list'>
        <h1>To-Do-List</h1>
        <div> 
            <input
            type="text"
            placeholder='Enter a task. . .'
            value={newTask}
            onChange={handleInputChange}
            />
            <button className='add-button' onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='delete-button' onClick={()=>deleteTask(index)}>Delete</button>
                <button className='move-button' onClick={()=>movetaskup(index)}>☝</button>
                <button className='move-button' onClick={()=> movetaskdown(index)}>👇</button>
            </li>)}
        </ol>

    </div>)

}
export default ToDoList