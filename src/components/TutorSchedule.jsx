import React, { useState } from "react";
import { TUTORS } from "../data/tutors";

export default function Tutors() {
  const tableStyle = {
    borderColor: "grey", // Sets the color of the table lines to grey
    tableLayout: "fixed", // Prevents the table from resizing cells based on content
    width: "100%", // Ensures that the table takes up the full width of the container
    border: 0, // Removes the border around the table
    borderSpacing: "0px",
  };

  const rowStyle = {
    borderBottom: "none", // This removes the horizontal border line
  };

  // Update the cell style to include only vertical borders
  const cellStyle = {
    padding: "0",
    margin: "0",
    minHeight: "48px",
    borderTop: "none", // Remove top border of the cell
    borderBottom: "none", // Remove bottom border of the cell
    // Keep any other styles you have for vertical borders if needed
  };

  const timeStyle = {
    width: "8%", // Ensures that each weekday column is the same width
    textAlign: "center",
    border: 1,
    height: "30px",
    minHeight: "48px", // Ensure that even empty slots have a minimum height
    overflow: "hidden", // Hide any overflow content
  };

  const weekdays = {
    width: "12.5%", // Ensures that each weekday column is the same width
  };

  const timeSlots = {
    borderTop: "1px solid grey", // Give the time slots a border to visually discern time
  }

  const prettyTime = (time) => {
    const hours = Math.floor(time);
    const minutes = (time - hours) * 60;
    const ampm = hours >= 12 ? "PM" : "AM";
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
        if (
          !currentSlot ||
          currentSlot.day !== day ||
          currentSlot.endHour !== hour
        ) {
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
    display: "block",
    textDecoration: "none",
    backgroundColor: color, // Add a background color to improve visibility
    padding: "0px", // Add some padding for spacing
    color: "white", // Change the text color to white
    height: "100%", // Ensure full height
    width: "100%", // Ensure full width
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    textAlign: "center", // Center text
    minHeight: "48px", // Ensure that even empty slots have a minimum height
    opacity: 0.77, // Reduce opacity to improve visibility of overlapping slots
    cursor: "pointer",
  });

  const [selectedClass, setSelectedClass] = useState(""); // State for selected class

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value); // Update the selected class when the dropdown changes
  };

  return (
    <div className="grid justify-center my-4">
      <div className="grid justify-center my-4">
        <div className="flex justify-center my-4">
          <div>
            <label htmlFor="classSelect" className="mr-2">
              Filter by course:{" "}
            </label>
            <select
              id="classSelect"
              onChange={handleClassChange}
              value={selectedClass}
              className='class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm '
            >
              <option value="">All</option>
              {Array.from(new Set(TUTORS.flatMap((tutor) => tutor.courses)))
                .toSorted()
                .map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="container flex justify-center items-center">
          <div
            className="scrollable-table-container"
            style={{
              overflowX: "auto",
              maxWidth: "100vw",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="row">
              <div className="col-sm col-sm-padding justify-content-center align-self-center">
                <div className="overflow-auto ">
                  <table
                    id="schedule-table"
                    className="table table-hover table-bordered table-auto border-collapse border border-gray-400"
                    style={tableStyle}
                  >
                    <thead>
                      <tr style={rowStyle}>
                        <th style={{ ...timeStyle, ...cellStyle }}></th>{" "}
                        <th style={{ ...weekdays, ...cellStyle }}>Mon</th>
                        <th style={{ ...weekdays, ...cellStyle }}>Tue</th>
                        <th style={{ ...weekdays, ...cellStyle }}>Wed</th>
                        <th style={{ ...weekdays, ...cellStyle }}>Thu</th>
                        <th style={{ ...weekdays, ...cellStyle }}>Fri</th>
                      </tr>
                    </thead>
                    <tbody id="schedule">
                      {Array.from({ length: 15 }, (_, i) => 9 + i * 0.5).map(
                        (hour) => (
                          <React.Fragment key={hour}>
                            {hour <= 16 && (
                              <>
                                <tr
                                  style={rowStyle}
                                  className="hover:bg-gray-900"
                                >
                                  <td
                                    style={{ ...timeStyle, ...cellStyle, transform: "translateY(-25%)", verticalAlign: "top" }}
                                  >
                                    {`${prettyTime(hour)}`}
                                  </td>
                                  {["M", "T", "W", "R", "F"].map((day) => (
                                    <td key={day} style={{...cellStyle, ...timeSlots}}>
                                      {TUTORS.filter((tutor) =>
                                        tutorTimeSlots[tutor.name].some(
                                          (slot) =>
                                            slot.day === day &&
                                            slot.startHour <= hour &&
                                            slot.endHour > hour &&
                                            (!selectedClass || tutor.courses.includes(selectedClass))
                                        )).map((tutor, index) => (
                                          <a
                                            rel="noopener,noreferrer"
                                            target="_blank"
                                            key={tutor.name}
                                            style={tutorNameStyle(tutor.color)}
                                            title={tutor.courses.join(", ")}
                                            href={`/tutoring/${tutor.name.toLowerCase().trim().replaceAll(/\s/g, "-")}`}
                                          >
                                            {
                                              index === 0 &&
                                              tutorTimeSlots[tutor.name].some(
                                                (slot) => slot.startHour === hour && slot.day === day
                                              )
                                                ? tutor.name
                                                : ""
                                            }
                                          </a>
                                      ))}
                                    </td>
                                  ))}
                                </tr>
                              </>
                            )}
                          </React.Fragment>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row"></div>
          <hr className="divider-big" />
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}
