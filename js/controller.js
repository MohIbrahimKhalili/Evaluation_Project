document.addEventListener("DOMContentLoaded", async () => {
  const model = new CourseModel();
  const view = new CourseView();

  let totalCredits = 0;

  const courses = await model.fetchCourses();
  view.renderAvailableCourses(courses);

  // Click to select/deselect available courses
  view.availableCourses.addEventListener("click", (e) => {
    const courseUnit = e.target.closest(".course-unit");
    if (!courseUnit) return;

    courseUnit.classList.toggle("selected");
  });

  // Click to select/deselect selected courses
  view.selectedCourses.addEventListener("click", (e) => {
    const courseUnit = e.target.closest(".course-unit");
    if (!courseUnit) return;

    courseUnit.classList.toggle("selected");
  });

  // Add selected courses from available to selected bucket
  view.addBtn.addEventListener("click", () => {
    const selectedUnits = view.availableCourses.querySelectorAll(".course-unit.selected");

    selectedUnits.forEach(unit => {
      const courseId = parseInt(unit.dataset.courseId);
      const course = courses.find(c => c.courseId === courseId);
      if (totalCredits + course.credit <= 18) {
        totalCredits += course.credit;
        view.renderSelectedCourse(course);
        unit.remove();
      }
    });

    view.updateTotalCredits(totalCredits);
    view.addBtn.disabled = totalCredits >= 18;
  });
});
