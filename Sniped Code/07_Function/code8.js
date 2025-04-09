function getGrade(marks) {
  switch (true) {
    case marks >= 90:
      return "A";
    case marks >= 70:
      return "B";
    case marks >= 50:
      return "C";
    default:
      return "Fail";
  }
}

console.log(getGrade(75));
