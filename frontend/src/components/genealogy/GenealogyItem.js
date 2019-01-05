import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GenealogyItem extends Component {
  render() {
    const { _id, firstName, lastName } = this.props;
    return (
      <div>
        <Link to={`/genealogy/${_id}`}>
          {firstName} {lastName}
        </Link>
      </div>
    );
  }
}

export default GenealogyItem;
