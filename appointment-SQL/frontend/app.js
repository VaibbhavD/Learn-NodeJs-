// Listen for form submission and add appointment
document
  .getElementById("appointmentForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    console.log("jhyhg");
    const name = document.getElementById("name").value;
    const phone_number = document.getElementById("phone_number").value;
    const email = document.getElementById("email").value;

    // Send POST request to book the appointment
    const response = await fetch("http://localhost:3306/api/appointments", {
      // Changed to port 3000
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone_number, email }),
    });

    const result = await response.json();
    alert(result.message);

    // Clear form inputs after submission
    document.getElementById("name").value = "";
    document.getElementById("phone_number").value = "";
    document.getElementById("email").value = "";

    // Fetch and show updated appointment list after booking
    getAppointments();
  });

// Fetch and display all appointments
async function getAppointments() {
  const response = await fetch("http://localhost:3306/api/appointments");
  const appointments = await response.json();

  console.log(appointments); // Log the response to debug
  console.error("Appointments is not an array:", appointments);

  // Check if appointments is an array
  if (!Array.isArray(appointments)) {
    return;
  }

  // Find the appointmentsList element
  const appointmentsList = document.getElementById("appointmentsList");
  appointmentsList.innerHTML = ""; // Clear existing list

  // Loop through each appointment and create a list item
  appointments.forEach((appointment) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${appointment.name} - ${appointment.phone_number} - ${appointment.email}`;
    appointmentsList.appendChild(listItem);
  });
}

// Load all appointments when the page is loaded
window.onload = getAppointments;
