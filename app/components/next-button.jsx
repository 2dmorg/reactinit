import React from 'react';
export default class NextButton extends React.Component {
  render() {
    return (
      <a className='next-button'>{this.props.name}</a>
    );
  }
}