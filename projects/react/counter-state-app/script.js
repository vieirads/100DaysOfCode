class Counter extends React.Component {
  state = {
    counter: 0
  }
  
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  reset = () => {
    this.setState({
        counter: 0
    });
  }

  render() {
    return <div>
      <p>{this.state.counter}</p>
      <div id="btn-container">
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}    >Reset</button>
      </div>
    </div>;
  }
}

const el = <Counter />
ReactDOM.render(
  el,
  document.getElementById('root')
)
