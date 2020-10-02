import React, { Component } from "react";
import axios from "axios";

export class EditTask extends Component {
  constructor(props) {
    super();
    this.state = {
      taskName: "",
      status: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      taskName: this.state.taskName,
      status: this.state.status,
    };
    axios
      .post(`/tasks/${this.props.match.params.id}/update`, updatedTask)
      .then(() => {
        console.log("updated");
        window.location = "/";
      });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    axios.get("/tasks/" + this.props.match.params.id).then((res) => {
      this.setState({
        taskName: res.data.taskName,
        status: res.data.status,
      });
    });
  }

  render() {
    return (
      <div
        className="container"
        style={{
          marginTop: "2rem",
        }}
      >
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="task"> Task Name </label>{" "}
            <input
              type="text"
              className="form-control"
              id="taskName"
              name="taskName"
              onChange={this.onChange}
              value={this.state.taskName}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>{" "}
            <input
              type="text"
              className="form-control"
              id="status"
              name="status"
              onChange={this.onChange}
              value={this.state.status}
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

export default EditTask;
