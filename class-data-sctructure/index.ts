import { SchoolStudent } from "./class";
import { requestStudentFromServer } from "./data-structure";

async function main() {
  const students = await requestStudentFromServer();

  students.forEach((student) => {
    const schoolStudent = new SchoolStudent(student.name, student.age);

    console.log(schoolStudent.name);
  });
}

main();
