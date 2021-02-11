import React from 'react';
import Button from './Button'


class ButtonCounter extends React.Component {
  state = { counter: 0 }

  handleClick = () => this.setState(prevState => ({ counter: prevState.counter + 1 }));

  render() {
    return (
      <Button onClick={this.handleClick} text={`You are clicked ${this.state.counter} times`} />
    )
  }
}

export default ButtonCounter;