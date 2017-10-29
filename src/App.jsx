import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello World" };
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;

