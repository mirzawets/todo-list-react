import React from 'react';
import Context from '../Context';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  styles = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.5rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '0.5rem 1rem',
    },

    input: {
      marginRight: '1rem',
    },
  };

  render() {
    const { todo, index } = this.props;
    const { toggleTodo, removeTodo } = this.context;

    const classes = [];

    if (todo.completed) {
      classes.push('done');
    }

    return (
      <li style={this.styles.li}>
        <span className={classes.join(' ')}>
          <input
            type='checkbox'
            checked={todo.completed}
            style={this.styles.input}
            onChange={() => toggleTodo(todo.id)}
          />
          <strong>{index + 1}</strong>
          &nbsp;
          {todo.title}
        </span>

        <button className='close-button' onClick={() => removeTodo(todo.id)}>
          &times;
        </button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

TodoItem.contextType = Context;

export default TodoItem;
