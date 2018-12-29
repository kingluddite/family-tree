import React, { Component } from 'react';

class GenealogyItem extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <div>
        {firstName} {lastName}
      </div>
    );
  }
}

export default GenealogyItem;
