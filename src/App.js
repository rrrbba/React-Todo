import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'



const tasksData = [
  {
    name: 'Walk dog',
    id: 12,
    done: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      task: tasksData
    };
  }

    toggleItem = id => {
      console.log(this.state);

      this.setState({
        tasks: this.state.tasks.map(item => {
          if (item.id === id) {
            return {
              ...item,
              done: !item.done
            }
          } else {
            return item;
          }
        }) 
      });
    };

    addItem = itemName => {
      const newItem = {
        name: itemName,
        id: Date.now(),
        done: false
      };
      this.setState({
        tasks: [...this.state.tasks, newItem],
        name: ''
      });
    };

    clearDone = () => {
      this.setState({
        tasks: this.state.tasks.filter(item => !item.done)
      });
    };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className = "App">
        <div className = "header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
         addItem = {this.addItem} 
          value = {this.state.tasks}

        />
        </div>
        <TodoList
          clearDone = {this.clearDone}
          tasks = {this.state.tasks}
          toggleItem = {this.toggleItem}
          />
      </div>
    );
  }
}

export default App;
