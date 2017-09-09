import React, {Component} from 'react';
import ContactList from './ContactList';
import ContactButtonList from './ContactButtonList';
import './ContactPage.css';

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.addToListFB=this.addToListFB.bind(this);
        this.addToListMS=this.addToListMS.bind(this);
        var contactList = JSON.parse(localStorage.getItem( 'contacts' )) || [];
        console.log(contactList)
        this.state = {
            contacts:contactList
        };
        // var xx = function(){
        //     var b = this.state.contacts.splice();
        //     b.push('pee');
        //     this.setState({contacts: b})
        //     //
        //     console.log(this.state.contacts);
        //     this.render()
        // }
    }

    addToListFB(){
        var b = [
            "Mike",
            "Georgia",
            "Sansa",
            "Sumit Sumit",
            "Koop"]
    var a = this.state.contacts;
    a.push.apply(a,b);
        localStorage.setItem( 'contacts', JSON.stringify(a) );
    this.setState({contacts: a})
    }
    addToListMS(){
        var b = [
            "Janet",
            "That one guy"
            ]
    var a = this.state.contacts;
    a.push.apply(a,b);
        localStorage.setItem( 'contacts', JSON.stringify(a) );
    this.setState({contacts: a})
    }

    render() {

        return (
            <div>
                <div className="left-container">
                    <ContactList contacts={this.state.contacts}></ContactList>
                </div>
                <div className="right-container">
                    <h5>Connect your contacts</h5>
                    <ContactButtonList funcFB={this.addToListFB} funcMS={this.addToListMS}></ContactButtonList>
                </div>
            </div>

        );
    }

}

export default ContactPage;