function countStudents(students, sandwiches) {
    var returnedStudents = 0;
    var i = 0;
    while (students.length > 0 && returnedStudents < students.length) {
        if (sandwiches[i] == students[0]) {
            i++;
            students.shift();
            returnedStudents = 0;
        }
        else {
            var student = students.shift();
            students.push(student);
            returnedStudents++;
        }
    }
    return returnedStudents;
}
;
var students = [1, 1, 1, 0, 0, 1];
var sandwiches = [1, 0, 0, 0, 1, 1];
console.log(countStudents(students, sandwiches));
