// ======= Controller =======
document.addEventListener("DOMContentLoaded", async () => {
  const model = new CourseModel();
  const view = new CourseView();
  let totalCredits = 0;

  const courses = await model.fetchCourses();
  view.renderAvailableCourses(courses);

  view.addBtn.addEventListener("click", () => {
    const selectedOptions = Array.from(view.availableCourses.selectedOptions);

    selectedOptions.forEach(option => {
      const courseId = parseInt(option.value);
      const course = courses.find(c => c.courseId === courseId);
      if (totalCredits + course.credit <= 18) {
        totalCredits += course.credit;
        view.renderSelectedCourse(course);
        option.remove(); // Remove from available
      }
    });

    view.updateTotalCredits(totalCredits);

    // Disable Add button if max 18 credits
    view.addBtn.disabled = totalCredits >= 18;
  });
});
