import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events';
import moment from 'moment';
import Modal from './Modal.js';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ContactList from '../contactPage/ContactList';
import './CalendarPage.css';
import {Button} from 'react-bootstrap';
import ContactButtonList from '../contactPage/ContactButtonList.js';

// let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])
BigCalendar.momentLocalizer(moment);

let Basic = React.createClass({
  getInitialState(){
    return{
      isModalOpen: false,
      tabIndex: 0
    };
  },
  render(){
    var dateObj = new Date();
    var month = dateObj.getUTCMonth(); //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    let basicStyle = {
      height:'90%'
    }

    return (
        <div style={basicStyle}>
          <BigCalendar
              // {...this.props}
              selectable
              events={events}
              defaultView='month'
              scrollToTime={new Date(1970, 1, 1, 6)}
              defaultDate={new Date(year, month, day)}
              onSelectEvent={event => {}}
              onSelectSlot={(slotInfo) => this.openModal(slotInfo.start)}
          />
            <Modal className="hook" width="800" height="400" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()} >
              <div className="blue-bg">
              <h1>{this.state.dateClicked}</h1>
                </div>
              <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList>
                  <Tab>Recipient</Tab>
                  <Tab>Personalize</Tab>
                  <Tab>Amount</Tab>
                </TabList>

                <TabPanel>
                  <h2>Choose a recipient</h2>
                  <div className="holder">
                  <ContactList contacts={JSON.parse(localStorage.getItem('contacts'))}></ContactList>
                  </div>
                    <p><button onClick={() => this.closeModal()}>Close</button></p>
                </TabPanel>
                <TabPanel>
                    <h2>Upload media file</h2>
                  <Button>Upload</Button>
                  <h2>Create Memory</h2>
                  <Button>Record Video</Button>
                  <Button>Take Picture</Button>
                </TabPanel>
                <TabPanel>
                  <h2>P3</h2>
                </TabPanel>
              </Tabs>
            </Modal>
          </div>
    )
  },
  openModal(slotInfo) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var cmonth = monthNames[slotInfo.getUTCMonth()];
    var cday = slotInfo.getUTCDate();
    var cyear = slotInfo.getUTCFullYear();
    console.log(slotInfo);
    this.setState({ isModalOpen: true, dateClicked: cmonth +' '+ cday +', '+ cyear })
  },

  closeModal() {
    this.setState({ isModalOpen: false })
  }
})

export default Basic;
