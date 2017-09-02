import React, {Component} from 'react';
import ContactList from './ContactList';
import ContactButtonList from './ContactButtonList';
import './ContactPage.css';

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <div className="left-container">
                    <ContactList></ContactList>
                </div>
                <div className="right-container">
                    <h5>Connect your contacts</h5>
                    <ContactButtonList></ContactButtonList>
                </div>
            </div>

        );
    }

}

export default ContactPage;