import React from 'react';

export default class Loader extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem' }}>
        <div className='lds-dual-ring' />
      </div>
    );
  }
}
