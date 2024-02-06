const Colors = {
	RED: "#F44336",
	BLUE: "#2196F3",
	PURPLE: "#9C27B0",
	GREEN: "#4CAF50",
	DEEP_ORANGE: "#FF5722",
	CYAN: "#00BCD4",
	INDIGO: "#3F51B5",
	AMBER: "#FFC107",
	LIME: "#CDDC39",
	PINK: "#E91E63",
	DEEP_PURPLE: "#673AB7",
	ORANGE: "#FF9800",
	TEAL: "#009688",
	YELLOW: "#FFEB3B",
	LIGHT_BLUE: "#03A9F4",
	BLUE_GRAY: "#607D8B",
};

/**
 * List of tutors, their available times, and the courses they tutor.
 *
 * Each tutor has the following properties:
 * - name: The tutor's name
 * - times: An array of times the tutor is available. Each time is an array of the form [day, start, end], where day is a string representing
 * 	 the day of the week (M, T, W, R, or F), and start and end are the start and end times of the block in hours (e.g. 9.5 is 9:30 AM)
 * - courses: An array of courses the tutor can tutor
 * - color: The color to use when displaying the tutor's name on the schedule. If not specified, the color will be automatically assigned from the COLORS array below.
 */
const TUTORS = [
	{
		name: "Chris Cooper",
		times: [
			["M", 9, 10],
		],
		courses: [
			"EECS 140",
			"EECS 168",
			"EECS 210",
			"EECS 268",
			"EECS 348",
			"EECS 388",
			"EECS 468",

			"MATH 125",
			"MATH 126",
			"MATH 127",
			"MATH 290",

			"PHSX 210/211",
			"PHSX 212",
			"PHSX 216",
			"PHSX 236",
		],
	},
	{
		name: "Charlie Doherty",
		times: [
			["M", 10.5, 11.5],
			["F", 9, 10],
	],
		courses: [
			"EECS 138",
			"EECS 140",
			"EECS 168",

			"MATH 125",
			"MATH 126"
		],
	},
	{
		name: "Ibrahim Sufi",
		times: [
			["M", 12, 13],
			["F", 12, 13],
		],
		courses: [
			"EECS 140",
			"EECS 168",
			"EECS 268",

			"MATH 125",
			"MATH 126",
			"MATH 127",
			"MATH 290",
		],
	},
	{
		name: "Dellie Wright",
		times: [
			["M", 13, 14],
			["T", 13, 14],
		],
		courses: [
			"EECS 138", 
			"EECS 140", 
			"EECS 168",
			"EECS 210",
			"EECS 268",

		],
	},
	{
		name: "Wyatt Payne",
		times: [
			["M", 14, 15.5],
			["R", 9, 10],
		],
		courses: [
			"EECS 168",
		],
	},
	{
		name: "Aniketh Aatipamula",
		times: [
			["T", 10, 12.5],
			["R", 11, 12.5],
		],
		courses: [
			"EECS 140", 
			"EECS 168", 
			"EECS 210",
			"EECS 268", 
			"EECS 348",
			"EECS 388",
			"EECS 468",

			"MATH 125", 
			"MATH 126",
			"MATH 127",
			"MATH 290",
		],
	},
	{
		name: "Louis Tracy",
		times: [
			["T", 14, 16],
			["R", 14, 16],
		],
		courses: [
			"EECS 330",
			"EECS 447",
			"EECS 510",
		],
	},
	{
		name: "Hunter Long",
		times: [
			["W", 10, 12],
		],
		courses: [
			"EECS 168",
			"EECS 268",

			"MATH 125",
			"MATH 126",
			"MATH 290",
		],
	},
	{
		name: "Lauren D'Souza",
		times: [
			["W", 12, 14],
		],
		courses: [
			"EECS 168",
			"EECS 210", 
			"EECS 268", 
			"EECS 348",
			"EECS 388",

			"MATH 125",
			"MATH 126",
			"MATH 127", 
			"MATH 290"],
	},
	{
		name: "Nabeel Ahmad",
		times: [["W", 15, 16]],
		courses: [
			"EECS 140", 
			"EECS 168",
			"EECS 210",
			"EECS 268",
		],
	},
	{
		name: "John Rader",
		times: [
			["R", 10, 11],
			["F", 14, 16],
		],
		courses: [
			"EECS 168",
			"MATH 125",
			"MATH 126",
		],
	},
	
];

// Colors to assign to tutors (from https://www.materialpalette.com/)
const COLORS = Object.values(Colors);

// Sorted list of all courses offered by at least one tutor (Set is used to remove duplicates)
const COURSES = [...new Set(TUTORS.flatMap((tutor) => tutor.courses))].sort();

// Length of a tutoring block in hours
const BLOCK_SIZE = 0.5;

const TUTOR_DAYS = ["M", "T", "W", "R", "F"];

// Earliest and latest half hours tutoring is offered
const START_TIME = Math.min(...TUTORS.flatMap(({ times }) => times.map((time) => time[1])));
const FINAL_TIME = Math.max(...TUTORS.flatMap(({ times }) => times.map((time) => time[2])));

// Assign colors to tutors if not manually specified
for (let i = 0; i < TUTORS.length; i++) {
	if (!TUTORS[i].color) TUTORS[i].color = COLORS[i % COLORS.length];
}

for (const course of COURSES) {
	const option = document.createElement("option");
	option.value = option.text = course;
	document.getElementById("course-select").add(option);
}

document.getElementById("course-select").addEventListener("change", (e) => {
	renderSchedule(e.target.value);
});

renderSchedule("-");

function renderSchedule(filter) {
	const table = document.getElementById("schedule");

	while (table.firstChild) {
		table.removeChild(table.firstChild);
	}

	for (let startTime = START_TIME; startTime < FINAL_TIME; startTime += BLOCK_SIZE) {
		const endTime = startTime + BLOCK_SIZE;

		const formattedTime = `
			<span class="text-nowrap">${prettyTime(startTime)}</span>
			<span> - </span>
			<span class="text-nowrap">${prettyTime(endTime)} ${endTime < 12 ? "AM" : "PM"}</span>
		`;

		const row = table.insertRow();
		const cell = row.insertCell();

		cell.innerHTML = formattedTime;

		for (let day of TUTOR_DAYS) {
			let cell = row.insertCell();

			cell.classList.add("tutor-cell");
			cell = cell.appendChild(document.createElement("div"));

			for (let tutor of TUTORS) {
				if (!(filter === "-" || tutor.courses.includes(filter))) continue;

				for (let time of tutor.times) {
					if (!(time[0] === day && time[1] <= startTime && time[2] >= endTime)) continue;

					const div = document.createElement("div");
					const centerTime = time[1] + Math.floor((time[2] - time[1]) / 2 / BLOCK_SIZE - 0.01) * BLOCK_SIZE;

					if (centerTime === startTime) {
						div.appendChild(document.createTextNode(tutor.name));
					}

					div.style.backgroundColor = tutor.color;

					cell.appendChild(div);

					div.addEventListener("click", () => setTutor(tutor));
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
