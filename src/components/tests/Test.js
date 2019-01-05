import React, { Component } from "react";

export class Test extends Component {
  state = { title: "", body: "" };

  async componentDidMount() {
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        //   data.forEach(() => console.log())
        // data.forEach(d => {
        this.setState({ title: data.title, body: data.body });
        // });
        // this.setState({ posts: data });
      });
  }
  render() {
    // console.log(this.state.data);
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
      </div>
    );
  }
}

export default Test;
