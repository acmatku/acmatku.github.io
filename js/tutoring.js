const TUTORS = [
	// Note: The order the tutors are listed here affects the order they display when occupying the same time slot and their colors
	/*{
		"name": "Example Tutor",
		// For time blocks, first charater is day of the week, M/T/W/R/F. Weekends are not supported. 
		// Second two digits are start and end time, which can be specified to the nearest half hour with .5
		"times": [["M", 10.5, 13], ["T", 14, 15.5], ["R", 9, 10]],
		"courses": ["EECS 168", "EECS 268", "MATH 125"]
	},*/
	{
		"name": "Rishab Bhat", 
		"times": [["M", 9, 10], ["W", 9, 10]],
		"courses": ["EECS 138", "EECS 168", "EECS 268"]
	},
	{
		"name": "Rohan Chinalachaiagari", 
		"times": [["T", 10, 12]],
		"courses": ["EECS 140", "MATH 125", "MATH 126"]
	},
	{
		"name": "Adair Torres", 
		"times": [["M", 10, 11], ["W", 10, 11.5], ["F", 10, 11.5]],
		"courses": ["EECS 140", "EECS 168", "MATH 125", "MATH 126", "MATH 127"]
	},
	{
		"name": "Nolan Blankenau", 
		"times": [["M", 11.5, 13.5], ["T", 12, 14], ["W", 12, 14], ["R", 12, 14], ["F", 12, 14]],
		"courses": ["EECS 138", "EECS 140", "EECS 168", "EECS 210", "EECS 268", "EECS 368", "EECS 388", "EECS 510", "EECS 560"]
	},
	{
		"name": "Drake Prebyl", 
		"times": [["T", 11, 12]],
		"courses": ["EECS 138", "EECS 140", "EECS 168", "EECS 268", "EECS 368", "EECS 388", "MATH 125"]
	},
	{
		"name": "Firangiz Ganbarli", 
		"times": [["R", 9, 10]],
		"courses": ["EECS 140", "EECS 168", "MATH 125", "MATH 126", "MATH 127"]
	},
	{
		"name": "Jacky Lin",
		"times": [["M", 14.5, 16], ["T", 14.5, 15.5], ["W", 14.5, 15.5], ["F", 14.5, 15.5]],
		"courses": ["EECS 168", "MATH 125", "MATH 126", "MATH 127"]
	},
	{
		"name": "Landen Doty", 
		"times": [["T", 15, 16], ["F", 11, 12]],
		"courses": ["EECS 140", "EECS 168", "MATH 125", "MATH 126", "MATH 290"]
	},
	{
		"name": "Suhaib Ansari",
		"times": [["M", 9.5, 10.5], ["T", 11, 13], ["R", 11, 13], ["F", 9.5, 10.5]],
		"courses": ["EECS 138", "EECS 168", "EECS 211", "EECS 221", "EECS 268", "EECS 420", "EECS 560", "MATH 125", "MATH 126", "MATH 127", "MATH 220"]
	},
	{
		"name": "Porter Furlong",
		"times": [["W", 11.5, 12.5]],
		"courses": ["EECS 210"]
	},
	{"name":"","times":[],"courses":[]}, // Skip a color
	{
		"name": "Rafael Alaras",
		"times": [["T", 13, 14]],
		"courses": ["EECS 138", "EECS 140", "EECS 168", "EECS 268", "EECS 368", "EECS 560", "MATH 125", "MATH 126", "MATH 127", "MATH 290"]
	}
];

// Length of a tutoring block in hours
const BLOCK_SIZE = 0.5;

// Colors to assign to tutors (from https://www.materialpalette.com/)
const COLORS = ["#F44336" /*red*/, "#2196F3" /*blue*/, "#4CAF50" /*green*/, "#9C27B0" /*purple*/,
	"#FF5722" /*deep orange*/, "#00BCD4" /*cyan*/, "#3F51B5" /*indigo*/, "#FFC107" /*amber*/, 
	"#CDDC39" /*lime*/, "#E91E63" /*pink*/, "#673AB7" /*deep purple*/, "#FF9800" /*orange*/, 
	"#FFEB3B" /*yellow*/, "#009688" /*teal*/, "#03A9F4" /*light blue*/, "#607D8B" /*blue grey*/];

// Sorted list of all courses offered by at least one tutor (Set is used to remove duplicates)
const COURSES = [...new Set(TUTORS.reduce((courses, tutor) => courses.concat(tutor.courses), []))].sort();

// Earliest and latest half hours tutoring is offered
const START_TIME = TUTORS.reduce((min, tutor) => Math.min(min, tutor.times.reduce((min, time) => Math.min(min, time[1]), 24)), 24);
const END_TIME   = TUTORS.reduce((max, tutor) => Math.max(max, tutor.times.reduce((max, time) => Math.max(max, time[2]),  0)),  0);

for (let i = 0; i < TUTORS.length; i++) {
	TUTORS[i].color = COLORS[i % COLORS.length];
}

for (let course of COURSES) {
	let option = document.createElement("option");
	option.value = option.text = course;
	document.getElementById("course-select").add(option);
}

document.getElementById("course-select").addEventListener("change", e => {
	renderSchedule(e.srcElement.value);
});

renderSchedule("-");
function renderSchedule(filter) {
	const tbody = document.getElementById("schedule");
	while (tbody.firstChild) tbody.removeChild(tbody.firstChild); // Clear past renderings
	
	for (let startTime = START_TIME; startTime < END_TIME; startTime += BLOCK_SIZE) {
		let endTime = startTime + BLOCK_SIZE;
		let formattedTime = "<span class='text-nowrap'>" + prettyTime(startTime) + " -</span> "
			+ "<span class='text-nowrap'>" + prettyTime(endTime) + " " + (endTime < 12 ? "AM" : "PM") + "</span>";
		let row = tbody.insertRow();
		let cell = row.insertCell();
		cell.innerHTML = formattedTime;
		
		for (let day of ["M", "T", "W", "R", "F"]) {
			let cell = row.insertCell();
			cell.classList.add("tutor-cell");
			cell = cell.appendChild(document.createElement("div"));
			
			for (let tutor of TUTORS) { // For each tutor
				if (filter == "-" || tutor.courses.includes(filter)) { // If the tutor offers the selected course
					for (let time of tutor.times) { // For each time the tutor offers
						if (time[0] == day && time[1] <= startTime && time[2] >= endTime) { // If the time is the one currently being looked at
							let div = document.createElement("div");
							// Put name in the most centered cell (the .01 biases it to go up when number of cells is even)
							if (time[1] + Math.floor((time[2] - time[1])/2/BLOCK_SIZE-.01)*BLOCK_SIZE == startTime) {
								div.appendChild(document.createTextNode(tutor.name));
							}
							div.style.backgroundColor = tutor.color;
							//if (time[1] == startTime) div.style.borderTop = "1px solid #dee2e6";
							//if (time[2] == endTime) div.style.borderBottom = "1px solid #dee2e6";
							div.addEventListener("click", () => setTutor(tutor));
							//div.addEventListener("mouseover", () => setTutor(tutor));
							cell.appendChild(div);
						}
					}
				}
			}
		}
	}
}

function setTutor(tutor) {
	document.getElementById("tutor-name").innerText = tutor.name;
	document.getElementById("tutor-courses").innerText = tutor.courses.sort().join(", ");
}

function prettyTime(time) {
	return (Math.floor(time) % 12 || 12) + ":" + ((time - Math.floor(time)) * 60).toString().padStart(2, "0");
}