import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;

// typically, this kind of data will live in a database layer, separate
// from the server.js file. You'll learn about the database layer later
// on, so for now we've included the data in-memory.
const studentData = [
  {
    studentId: '1546906',
    studentName: 'Sally Student',
    currentGrade: 'A',
  },
  {
    studentId: '2300457',
    studentName: 'Thaddeus Think',
    currentGrade: 'A',
  },
  {
    studentId: '9920711',
    studentName: 'Jason Javascript',
    currentGrade: 'B',
  }
];

app.get('/', (req, res) => {
  res.json(studentData);
})

// the user would actually make a request
// to one of the IDs, like `/9920711`. `studentId`
// is accessible in the `req.params` object.
app.get('/:studentId', (req, res) => {
  // use destructuring assignment to adsign `req.params.studentId`
  // to its own variable
  const { studentId } = req.params;
  let student = studentData.find(student => student.studentId === studentId);


  // Don't do it this way
  // let requestedData;

  // loop through studentData to find a matching studentId
  // for (let i = 0; i<studentData.length; i++) {
  //   if (studentData[i].studentId === studentId) {
  //     requestedData = studentData[i]
  //   }
  // };
  // send the data matching the requested studentId
  res.json(student);
});

// listen for requests
app.listen(PORT, () => console.log(
  `Your app is listening on port ${PORT}`));
