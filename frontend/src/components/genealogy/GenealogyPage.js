import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class GenealogyPage extends Component {
  render() {
    const { match } = this.props;
    return <div>{match.params._id}</div>;
  }
}

export default withRouter(GenealogyPage);
