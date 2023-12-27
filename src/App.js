import React from 'react';
import Context from './Context';
import TodoList from './Todo/TodoList';
import Loader from './Loader';
import TodoForm from './Todo/TodoForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      loading: true,
    };

    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((todosList) => {
        setTimeout(() => {
          this.setState({ todos: todosList });
          this.setState({ loading: false });
        }, 1000);
      });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      }),
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  addTodo(inputValue) {
    this.setState({
      todos: [
        ...this.state.todos,
        { userId: 1, id: Date.now(), title: inputValue, completed: false },
      ],
    });
  }

  render() {
    return (
      <Context.Provider value={{ toggleTodo: this.toggleTodo, removeTodo: this.removeTodo }}>
        <div className='wrapper'>
          <h1>Todo List</h1>

          <TodoForm addTodo={this.addTodo} />

          {this.state.loading && <Loader />}
          {this.state.todos.length ? (
            <TodoList todos={this.state.todos} />
          ) : (
            !this.state.loading && <p>No todos!</p>
          )}
        </div>
      </Context.Provider>
    );
  }
}
