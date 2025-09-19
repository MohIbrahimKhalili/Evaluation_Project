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
      const div = document.createElement("div");
      div.classList.add("course-unit");
      div.dataset.courseId = course.courseId;
      div.dataset.credit = course.credit;
      div.innerHTML = `
        <div>${course.courseName}</div>
        <div>${course.required ? "Compulsory" : "Elective"}</div>
        <div>${course.credit} cr</div>
      `;
      this.availableCourses.appendChild(div);
    });
  }

  renderSelectedCourse(course) {
    const div = document.createElement("div");
    div.classList.add("course-unit");
    div.dataset.courseId = course.courseId;
    div.dataset.credit = course.credit;
    div.innerHTML = `
      <div>${course.courseName}</div>
      <div>${course.required ? "Compulsory" : "Elective"}</div>
      <div>${course.credit} cr</div>
    `;
    this.selectedCourses.appendChild(div);
  }

  updateTotalCredits(total) {
    this.totalCredits.textContent = total;
  }
}
