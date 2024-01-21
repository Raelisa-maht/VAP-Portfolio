// An example array of booked dates (you can replace this with your actual data from a server or database)
const bookedDates = [
    "2023-07-25",
    "2023-07-26",
    "2023-08-13",
    "2023-08-14",
    "2023-08-29",
    "2023-09-26",
    "2023-09-15",
    "2023-09-21",
    "2023-10-2",
    "2023-10-1",
    "2023-11-29",
    "2023-11-28",
    "2023-11-3",
    "2023-11-4",
    "2023-12-23",
    "2023-12-24",
    "2023-12-25",
    "2023-12-26",
    "2024-1-1",
    "2024-1-31",
    "2024-2-23",
    "2024-2-24",
    "2024-3-22",
    "2024-3-23",
];

function checkAvailability() {
    const checkinInput = document.getElementById("checkin");
    const checkoutInput = document.getElementById("checkout");

    const checkinDate = new Date(checkinInput.value);
    const checkoutDate = new Date(checkoutInput.value);

    // Check if either check-in or check-out date is empty
    if (!checkinInput.value || !checkoutInput.value) {
        displayResult("Please input both check-in and check-out dates.");
        return;
    }

    // Check if check-in date is before the check-out date
    if (checkinDate >= checkoutDate) {
        displayResult("Check-in date must be before the check-out date.");
        return;
    }

    // Check if any of the dates between check-in and check-out are already booked
    let currentDate = new Date(checkinDate);
    while (currentDate <= checkoutDate) {
        const formattedDate = formatDate(currentDate);
        if (bookedDates.includes(formattedDate)) {
            displayResult(`Room is not available on ${formattedDate}`);
            return;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    displayResult("Room is available for the selected dates.");
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function displayResult(message) {
    const resultDiv = document.getElementById("availabilityResult");
    resultDiv.innerText = message;
}