const randomizer = (students) => {
  const randomStudent = Math.floor(Math.random() * students.length);
  return students[randomStudent];
};

export default randomizer;
