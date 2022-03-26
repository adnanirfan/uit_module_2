import React from "react";

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}

export default ThemedButton;
