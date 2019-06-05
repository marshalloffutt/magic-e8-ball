import axios from 'axios';

import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getStudents = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/students.json`)
    .then((result) => {
      const allStudentsObject = result.data;
      const allStudentsArray = [];
      if (allStudentsObject !== null) {
        Object.keys(allStudentsObject).forEach((studentId) => {
          const newStudent = allStudentsObject[studentId];
          newStudent.id = studentId;
          allStudentsArray.push(newStudent);
        });
      }
      resolve(allStudentsArray);
    })
    .catch((err) => {
      reject(err);
    });
});

export default getStudents;
