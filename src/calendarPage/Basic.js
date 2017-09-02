import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events';
import moment from 'moment';
import Modal from '../Modal.js';
import ContactButtonList from '../contactPage/ContactButtonList.js';

// let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])
BigCalendar.momentLocalizer(moment);

let Basic = React.createClass({
  getInitialState(){
    return{
      isModalOpen: false
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
            <Modal width="500" height="400" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()} >
              <h1>{this.state.dateClicked}</h1>
              <ContactButtonList></ContactButtonList>
              <p><button onClick={() => this.closeModal()}>Close</button></p>
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
