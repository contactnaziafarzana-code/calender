const monthSelect = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const heading = document.querySelector("h1");
const calendarList = document.querySelector("ul");

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function createCalendar(month, year) {
  const monthIndex = monthNames.indexOf(month);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, monthIndex, 1).getDay();

  heading.textContent = `${month} ${year}`;
  calendarList.innerHTML = "";

  
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarList.appendChild(document.createElement("li"));
  }

 
  for (let day = 1; day <= daysInMonth; day++) {
    const li = document.createElement("li");
    li.textContent = day;
    calendarList.appendChild(li);
  }

  const totalCells = firstDayOfWeek + daysInMonth;
  const remaining = (7 - (totalCells % 7)) % 7;
  for (let i = 0; i < remaining; i++) {
    calendarList.appendChild(document.createElement("li"));
  }
}

monthSelect.addEventListener("change", () => {
  createCalendar(monthSelect.value, Number(yearInput.value));
});

yearInput.addEventListener("input", () => {
  createCalendar(monthSelect.value, Number(yearInput.value));
});


createCalendar("January", 2026);
monthSelect.value = "January";