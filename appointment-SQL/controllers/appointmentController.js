const db = require("../models/db");

// Insert appointment data
exports.bookAppointment = (req, res) => {
  const { name, phone_number, email } = req.body;

  if (!name || !phone_number || !email) {
    return res.status(400).send({ message: "All fields are required" });
  }

  const query =
    "INSERT INTO appointment (name, phone_number, email) VALUES (?, ?, ?)";
  db.query(query, [name, phone_number, email], (err, results) => {
    if (err) {
      return res.status(500).send({ message: "Database error", error: err });
    }
    res.status(201).send({
      message: "Appointment booked successfully",
      appointmentId: results.insertId,
    });
  });
};

// Get all appointments
exports.getAppointments = (req, res) => {
  const query = "SELECT * FROM appointment ORDER BY created_at DESC";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send({ message: "Database error", error: err });
    }
    console.log(results);
    res.status(200).send(results);
  });
};
