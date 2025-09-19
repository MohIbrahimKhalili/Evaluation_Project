// ======= Controller =======
document.addEventListener("DOMContentLoaded", async () => {
  const model = new CourseModel();
  const view = new CourseView();
  let totalCredits = 0;

  const courses = await model.fetchCourses();
  view.renderAvailableCourses(courses);

  // Click to select/deselect courses in available bucket
  view.availableCourses.addEventListener("click", e => {
    const unit = e.target.closest(".course-unit");
    if (!unit) return;
    unit.classList.toggle("selected");
  });

  // Add selected courses
  view.addBtn.addEventListener("click", () => {
    const selectedUnits = view.availableCourses.querySelectorAll(".course-unit.selected");
    selectedUnits.forEach(unit => {
      const courseId = parseInt(unit.dataset.courseId);
      const course = courses.find(c => c.courseId === courseId);
      if (totalCredits + course.credit <= 18) {
        totalCredits += course.credit;
        view.renderSelectedCourse(course);
        unit.remove(); // remove from available
      }
    });

    view.updateTotalCredits(totalCredits);
    view.addBtn.disabled = totalCredits >= 18;
  });
});
