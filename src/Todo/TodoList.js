import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
  styles = {
    ul: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
  };

  render() {
    const { todos } = this.props;

    return (
      <ul style={this.styles.ul}>
        {todos.map((todo, index) => {
          return <TodoItem todo={todo} key={todo.id} index={index} />;
        })}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
