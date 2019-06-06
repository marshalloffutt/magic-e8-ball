const superComplexAlgorithm = (students) => {
  const studentSelector = Math.floor(Math.random() * students.length);
  return students[studentSelector];
};

export default superComplexAlgorithm;
