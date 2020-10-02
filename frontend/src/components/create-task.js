import axios from "axios";
import React, { Component } from "react";

export class CreateTask extends Component {
  state = {
    taskName: "",
    status: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      ...this.state,
    };
    axios.post("/tasks", newTask).then(() => {
      console.log("sent");
      window.location = "/";
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "2rem" }}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="task">Enter Task Name</label>
            <input
              type="text"
              className="form-control"
              id="taskName"
              name="taskName"
              placeholder="Enter Task Name"
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Enter the status of task</label>
            <input
              type="text"
              className="form-control"
              id="status"
              name="status"
              placeholder="Status of Task"
              onChange={this.onChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateTask;
