import React from 'react';
import PropTypes from 'prop-types';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();

    if (this.state.value.trim()) {
      this.props.addTodo(this.state.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <form
        style={{ marginBottom: '1rem', display: 'flex', height: '30px' }}
        onSubmit={this.submitHandler}
      >
        <input
          type='text'
          style={{ marginRight: '0.2rem' }}
          value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })}
        />
        <button type='submit' className='form-submit-button'>
          Add todo
        </button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
