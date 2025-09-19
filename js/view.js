// ======= View =======
class CourseView {
  constructor() {
    this.availableCourses = document.getElementById("availableCourses");
    this.selectedCourses = document.getElementById("selectedCourses");
    this.addBtn = document.getElementById("addBtn");
    this.totalCredits = document.getElementById("totalCredits");
  }

  renderAvailableCourses(courses) {
    this.availableCourses.innerHTML = "";
    courses.forEach(course => {
      const option = document.createElement("option");
      option.value = course.courseId;
      option.textContent = `${course.courseName} (${course.required ? "Compulsory" : "Elective"}) - ${course.credit} cr`;
      option.dataset.credit = course.credit;
      this.availableCourses.appendChild(option);
    });
  }

  renderSelectedCourse(course) {
    const option = document.createElement("option");
    option.value = course.courseId;
    option.textContent = `${course.courseName} (${course.required ? "Compulsory" : "Elective"}) - ${course.credit} cr`;
    option.dataset.credit = course.credit;
    this.selectedCourses.appendChild(option);
  }

  updateTotalCredits(total) {
    this.totalCredits.textContent = total;
  }
}
