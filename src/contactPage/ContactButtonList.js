import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ContactsListButtons extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
      <Button bsStyle="primary">Facebook</Button>
          </li>
          <li>
        <Button bsStyle="warning">Myspace</Button>
          </li>
          </ul>
  </div>
    );
  }
}

export default ContactsListButtons;
