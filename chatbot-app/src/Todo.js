import { React, useState} from 'react';
import { MdDeleteOutline } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import './Todo.css';

function Todo() {
	const [task, setTask] = useState("");
	const [description, setDescription] = useState("");
  	const [tasks, setTasks] = useState({
    	unassigned: [],
    	inProgress: [],
    	completed: []
  	});

  	const handleAddTask = () => {
    	if (!task || !description) return;

    	const newTask = {
     		id: Date.now(),
      		title: task,
      		description: description,
    	};

    	setTasks((prevTasks) => ({
    	  ...prevTasks,
    	  unassigned: [...prevTasks.unassigned, newTask]
    	}));

    	setTask("");
    	setDescription("");
  	};

  	const handleDeleteTask = (column, id) => {
    	setTasks((prevTasks) => ({
      		...prevTasks,
      		[column]: prevTasks[column].filter((task) => task.id !== id),
    	}));
  	};

  	const handleMoveTask = (column, id, targetColumn) => {
    	const taskToMove = tasks[column].find((task) => task.id === id);
    	if (!taskToMove) return;

    	setTasks((prevTasks) => ({
      		...prevTasks,
      	[column]: prevTasks[column].filter((task) => task.id !== id),
      	[targetColumn]: [...prevTasks[targetColumn], taskToMove],
    	}));
 	};
	return (
		<div className="todo">
	  	<h1>Volunteer Organization To Do</h1>

	  	<div className="todo-wrapper">
			<div className="todo-input">
				<div className="todo-input-item">
					<label>Task</label>
					<input type="text" placeholder="What is the task needed to complete?" value={task}
              			onChange={(e) => setTask(e.target.value)}/>
				</div>
				<div className="todo-input-item">
					<label>Description</label>
					<input type="text" placeholder="What is the description of the task" value={description}
              			onChange={(e) => setDescription(e.target.value)} />
				</div>
				<div className="todo-input-item">
					<button type="button" className="primaryBtn" onClick={handleAddTask}>Add</button>
				</div>
			</div>

			<div className='todo-columns'>
				<div className="todo-column">
					<h2>Unassigned</h2>
					{tasks.unassigned.map((task) => (
              			<div key={task.id} className="todo-list-item">
                			<h3>{task.title}</h3>
                			<p>{task.description}</p>
                			<div>
                  				<MdDeleteOutline className="delete-icon" onClick={() => handleDeleteTask("unassigned", task.id)}/>
						 		<IoIosCheckmarkCircleOutline className="check-icon" onClick={() => handleMoveTask("unassigned", task.id, "inProgress")}/>
							</div>
						</div>
					))}
				</div>

				<div className="todo-column">
					<h2>In Progress</h2>
					{tasks.inProgress.map((task) => (
            	  			<div key={task.id} className="todo-list-item">
            	    			<h3>{task.title}</h3>
            	    			<p>{task.description}</p>
            	    			<div>
            	      				<MdDeleteOutline className="delete-icon" onClick={() => handleDeleteTask("inProgress", task.id)}/>
							 		<IoIosCheckmarkCircleOutline className="check-icon" onClick={() => handleMoveTask("inProgress", task.id, "completed")}/>
								</div>
							</div>
						))}
				</div>

				<div className="todo-column">
					<h2>Completed</h2>
					{tasks.completed.map((task) => (
            	  		<div key={task.id} className="todo-list-item">
            	    		<h3>{task.title}</h3>
            	    		<p>{task.description}</p>
            	    		<div>
            	    			<MdDeleteOutline className="delete-icon"
            	    			onClick={() => handleDeleteTask("completed", task.id)}/>

							</div>
						</div>
					))}
				</div>
			</div>

		</div>
		</div>
	);
}

export default Todo;