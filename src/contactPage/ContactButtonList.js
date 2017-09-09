import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class ContactsListButtons extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Button bsStyle="primary" onClick={this.props.funcFB}>Facebook</Button>
                    </li>
                    <li>
                        <Button bsStyle="warning" onClick={this.props.funcMS}>Myspace</Button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ContactsListButtons;
