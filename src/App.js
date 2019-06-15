import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(newItem, value){
    this.setState({
      newItem: value
    });
  }

  addItem(){
    const newItem={
      id: Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem:""
    });
  }

  deleteItem(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  render() {
    return(
      <div className="App">
        <div>
          <div className="Header">Add Task</div>
          <br/>
          <input 
            maxLength="32"
            className="TaskBox"
            type="text"
            placeholder="Enter task"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            className="AddButton"
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          >
            ADD
          </button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button
                    className="DeleteButton"
                    onClick={() => this.deleteItem(item.id)}
                    >
                      X
                    </button>
                </li>
                ) 
              }
          )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
