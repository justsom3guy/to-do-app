import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Task = (props) => (
  <tr>
    <td>{props.data.taskName}</td>
    <td>{props.data.status}</td>
    <td>{props.data.createdAt.substring(0, 10)}</td>
    <td>
      <Link to={`/edit/${props.data._id}`}>Edit</Link>
    </td>
    <td>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          props.deleteTask(props.data._id);
        }}
      >
        Danger
      </button>
    </td>
  </tr>
);

export class ListTask extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    axios.get("/tasks").then((tasks) => {
      this.setState(() => ({
        tasks: tasks.data,
      }));
    });
  }

  deleteTask = (id) => {
    axios.delete(`/tasks/${id}`).then(() => {
      console.log("Task Deleted");
    });
    this.setState({
      tasks: this.state.tasks.filter((task) => task._id !== id),
    });
  };

  render() {
    const taskList =
      this.state.tasks.length > 0 ? (
        this.state.tasks.map((task) => (
          <Task data={task} key={task._id} deleteTask={this.deleteTask} />
        ))
      ) : (
        <tr>
          <td colSpan="3" align="center">
            &#8230;
          </td>
        </tr>
      );
    return (
      <div className="container" style={{ marginTop: "2rem" }}>
        <h3>Tasks</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Task-Name</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{taskList}</tbody>
        </table>
      </div>
    );
  }
}

export default ListTask;
