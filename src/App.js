import React, {Component} from 'react';
import logo from './logo.svg';
import ContactsListButtons from './contactPage/ContactButtonList.js';
import Basic from './calendarPage/CalendarPage.js';
import ContactPage from './contactPage/ContactPage.js';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import './App.css';
import './contactPage/ContactList.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0
        };
    }

    //disabledTabClassName="react-tabs__tab--disabled" disabled={false}
    
    render() {
        return (
            <div className="App">
                <div>
                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        <Tab>Contacts</Tab>
                        <Tab>Calendar</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Contact View</h2>
                            <ContactPage></ContactPage>
                    </TabPanel>
                    <TabPanel>
                        <div className="tall">
                            <h2>Calendar View</h2>
                            <Basic></Basic>
                        </div>
                    </TabPanel>
                </Tabs>
                    </div>
            </div>
        );
    }

    // openModal() {
    //     this.setState({ isModalOpen: true })
    // }
    //
    // closeModal() {
    //     this.setState({ isModalOpen: false })
    // }
}

export default App;
