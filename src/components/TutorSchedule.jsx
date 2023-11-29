import React, { useState } from 'react';
import { TUTORS } from '~/data/tutors';

export default function Tutors() {



  
  const tableStyle = {
    borderColor: 'grey', // Sets the color of the table lines to grey
    tableLayout: 'fixed', // Prevents the table from resizing cells based on content
    width: '100%', // Ensures that the table takes up the full width of the container
    border: 0, // Removes the border around the table
  };

  const rowStyle = {
    borderBottom: 'none', // This removes the horizontal border line
  };

  // Update the cell style to include only vertical borders
  const cellStyle = {
    padding: '0',
    minHeight: '50px',
    borderTop: 'none', // Remove top border of the cell
    borderBottom: 'none', // Remove bottom border of the cell
    // Keep any other styles you have for vertical borders if needed
  };

  const timeStyle = {
    width: '10%', // Ensures that each weekday column is the same width  
    textAlign: 'center',
    border: 1,
    height: '40px',
    minHeight: '40px', // Ensure that even empty slots have a minimum height

  }

  const weekdays = {
    width: '12.5%' // Ensures that each weekday column is the same width
  };
  
 const prettyTime = (time) => {
  const hours = Math.floor(time);
  const minutes = (time - hours) * 60;
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHour = hours % 12 || 12; // Converts 0 hours to 12 for AM
  return `${formattedHour}:${minutes.toString().padStart(2, "0")} ${ampm}`;
};


  const tutorTimeSlots = {}; // Store tutor time slots

  // Initialize tutorTimeSlots with an empty array for each tutor
  TUTORS.forEach((tutor) => {
    tutorTimeSlots[tutor.name] = [];
  });

  // Populate tutorTimeSlots with time slots for each tutor
  TUTORS.forEach((tutor) => {
    let currentSlot = null;
    tutor.times.forEach(([day, startTime, endTime]) => {
      for (let hour = startTime; hour < endTime && hour <= 16; hour += 0.5) {
  
        if (!currentSlot || currentSlot.day !== day || currentSlot.endHour !== hour) {
          if (currentSlot) {
            tutorTimeSlots[tutor.name].push(currentSlot);
          }
          currentSlot = { day, startHour: hour, endHour: hour + 0.5 };
        } else {
          currentSlot.endHour = hour + 0.5;
        }
      }
      if (currentSlot) {
        tutorTimeSlots[tutor.name].push(currentSlot);
      }
      currentSlot = null;
    });
  });

  const tutorNameStyle = (color) => ({
    backgroundColor: color, // Add a background color to improve visibility
    padding: '4px', // Add some padding for spacing
    color: 'white', // Change the text color to white
    height: '100%', // Ensure full height
    width: '100%',  // Ensure full width
    display: 'flex', // Use flexbox for alignment
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    textAlign: 'center', // Center text
    minHeight: '40px', // Ensure that even empty slots have a minimum height
    opacity: 0.95, // Reduce opacity to improve visibility of overlapping slots
  });



  const [selectedClass, setSelectedClass] = useState(''); // State for selected class

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value); // Update the selected class when the dropdown changes
    console.log(selectedClass)
  };

  return (
    <div className='grid justify-center my-4'>
      {/* Add a dropdown for class selection */}
      <div className='flex justify-center my-4'>
        <div>
        <label htmlFor="classSelect" className="mr-2">Select a course: </label>
        <select id="classSelect" onChange={handleClassChange} value={selectedClass} className='class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm '>
          <option value="">All</option>
          {Array.from(new Set(TUTORS.flatMap((tutor) => tutor.courses))).map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
        </div>
        {console.log('Component re-rendered')} {/* Add this line */}
      </div>

      {/* ... (Your existing code for the table header and container) */}
      <div className="container flex justify-center items-center">
        <div className="row">
          <div className="col-sm col-sm-padding justify-content-center align-self-center">
            <div className="overflow-auto ">
              <table id="schedule-table" className="table table-hover table-bordered table-auto border-collapse border border-gray-400" style={tableStyle}>
                <thead>
                <tr style={rowStyle}>
                    <th style={{ ...timeStyle, ...cellStyle }}></th> {/* Empty cell for the time column */}
                    <th style={{ ...weekdays, ...cellStyle }}>Mon</th>
                    <th style={{ ...weekdays, ...cellStyle }}>Tue</th>
                    <th style={{ ...weekdays, ...cellStyle }}>Wed</th>
                    <th style={{ ...weekdays, ...cellStyle }}>Thu</th>
                    <th style={{ ...weekdays, ...cellStyle }}>Fri</th>
                  </tr>
                </thead>
                <tbody id="schedule">
                  {/* Map over the 30-minute time slots from 9 am to 4 pm */}
                  {Array.from({ length: 17 }, (_, i) => 9 + i * 0.5).map((hour) => (
                  <React.Fragment key={hour}>
                    {hour < 16 && (
                      <>
                        <tr style={rowStyle} className="hover:bg-gray-600">
                          <td style={{ ...timeStyle, ...cellStyle }}>{`${prettyTime(hour)} - ${prettyTime(hour + 0.5)}`}</td>
                          {['M', 'T', 'W', 'R', 'F'].map((day) => (
                            <td key={day} style={cellStyle}>
                              {TUTORS.filter((tutor) =>
                                tutorTimeSlots[tutor.name].some((slot) =>
                                  slot.day === day && slot.startHour <= hour && slot.endHour > hour &&
                                  (!selectedClass || tutor.courses.includes(selectedClass))
                                )
                              ).map((tutor, index) => (
                                <div key={tutor.name} style={tutorNameStyle(tutor.color)}>
                                  {index === 0 && tutorTimeSlots[tutor.name].some(slot => slot.startHour === hour) ? tutor.name : ''}
                                </div>
                              ))}
                            </td>
                          ))}
                        </tr>
                      </>
                    )}
                  </React.Fragment>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
        </div>
        <hr className="divider-big" />
        <div className="row">
        </div>
      </div>
    </div>
  );
}
