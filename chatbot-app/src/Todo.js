import { React, useState} from 'react';
import { MdDeleteOutline } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import './Todo.css';

function Todo() {
  return (
	<div className="todo">
	  <h1>Volunteer Organization To Do</h1>

	  <div className="todo-wrapper">
		<div className="todo-input">
			<div className="todo-input-item">
				<label>Task</label>
				<input type="text" placeholder="What is the task needed to complete?" />
			</div>
			<div className="todo-input-item">
				<label>Description</label>
				<input type="text" placeholder="What is the description of the task" />
			</div>
			<div className="todo-input-item">
				<button type="button" className="primaryBtn">Add</button>
			</div>
		</div>

		<div className='todo-columns'>
			<div className="todo-column">
				<h2>Unassigned</h2>
				<div className="todo-list-item">
					<h3>Task 1</h3>
					<span></span>
					<p>Bla bla description</p>
					<div>
						<MdDeleteOutline className='delete-icon'/>
						<IoIosCheckmarkCircleOutline className='check-icon'/>
					</div>
				</div>
			</div>

			<div className="todo-column">
				<h2>In Progress</h2>
				<div className="todo-list-item">
					<h3>Task 2</h3>
					<p>Bla bla description</p>
					<div>
						<MdDeleteOutline className='delete-icon'/>
						<IoIosCheckmarkCircleOutline className='check-icon'/>
					</div>
				</div>
			</div>

			<div className="todo-column">
				<h2>Completed</h2>
				<div className="todo-list-item">
					<h3>Task 3</h3>
					<p>Bla bla description</p>
					<div>
						<MdDeleteOutline className='delete-icon'/>
						<IoIosCheckmarkCircleOutline className='check-icon'/>
					</div>
				</div>
			</div>
		</div>

	  </div>
	</div>
  );
}

export default Todo;