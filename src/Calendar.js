import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

// const MyCalendar = props => (
//   <div>
//     <BigCalendar
//       events={myEventsList}
//       startAccessor='startDate'
//       endAccessor='endDate'
//     />
//   </div>
// );

let components = {
  event: MyEvent, // used by each view (Month, Day, Week)
  toolbar: MyToolbar,
  agenda: {
       event: MyAgendaEvent // with the agenda view use a different component to render events
  }
}
<Calendar components={components} />

class MyCalendar extends Component {
  render() {
    return (
      <div>
        <BigCalendar
          events={myEventsList}
          startAccessor='startDate'
          endAccessor='endDate'
        />
      </div>
    );
  }
}

export default MyCalendar;
