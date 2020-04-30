import React, { Component } from 'react';

class List extends Component {
    render() {
    return <li>{this.props.details.nom} {this.props.details.id}</li>
    }
};

export default List;