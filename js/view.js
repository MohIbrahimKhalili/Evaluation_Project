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
      const unit = document.createElement("div");
      unit.classList.add("course-unit");
      unit.dataset.courseId = course.courseId;
      unit.dataset.credit = course.credit;

      unit.innerHTML = `
        <div class="course-name">${course.courseName}</div>
        <div class="course-type">${course.required ? "Compulsory" : "Elective"}</div>
        <div class="course-credit">${course.credit} cr</div>
      `;

      this.availableCourses.appendChild(unit);
    });
  }

  renderSelectedCourse(course) {
    const unit = document.createElement("div");
    unit.classList.add("course-unit");
    unit.dataset.courseId = course.courseId;
    unit.dataset.credit = course.credit;

    unit.innerHTML = `
      <div class="course-name">${course.courseName}</div>
      <div class="course-type">${course.required ? "Compulsory" : "Elective"}</div>
      <div class="course-credit">${course.credit} cr</div>
    `;

    this.selectedCourses.appendChild(unit);
  }

  updateTotalCredits(total) {
    this.totalCredits.textContent = total;
  }
}
