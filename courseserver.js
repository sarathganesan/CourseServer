const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Define your course data as an array of objects
const courses = [
  {
    name: 'Basic Algorithm',
    startDate: '27 jan 2023',
    lessonCompleted: '10/25(48%)',
    duration: '14h 38m 56s'
  },
  {
    name: 'Web Development',
    startDate: '23 Feb 2023',
    lessonCompleted: '40/45(97%)',
    duration: '36h 30m 00s'
  },
  {
    name: 'Basic Data Science',
    startDate: '14 jan 2023',
    lessonCompleted: '9/37(40%)',
    duration: '37h 00m 00s'
  },
  {
    name: 'UI/UX Design',
    startDate: '19 Feb 2023',
    lessonCompleted: '26/32(84%)',
    duration: '16h 40m 50s'
  },
  {
    name: 'Project Management',
    startDate: '27 jan 2023',
    lessonCompleted: '14/19(89%)',
    duration: '13h 20m 00s'
  }
];

// Enable CORS
app.use(cors());

// Define a route to return the course data
app.get('/', (req, res) => {
  res.json(courses);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
