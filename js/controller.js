// ======= Controller =======
document.addEventListener("DOMContentLoaded", async () => {
  const model = new CourseModel();
  const view = new CourseView();
  let totalCredits = 0;

  const courses = await model.fetchCourses();
  view.renderAvailableCourses(courses);


  view.availableCourses.addEventListener("click", e => {
    const unit = e.target.closest(".course-unit");
    if (!unit) return;
    unit.classList.toggle("selected");
  });


  view.addBtn.addEventListener("click", () => {
    const selectedUnits = view.availableCourses.querySelectorAll(".course-unit.selected");

    if (selectedUnits.length === 0) {
      alert("Please select at least one course.");
      return;
    }

  
    let addedCredits = 0;
    selectedUnits.forEach(unit => {
      addedCredits += parseInt(unit.dataset.credit);
    });

    if (totalCredits + addedCredits > 18) {
      alert("Adding these courses exceeds the maximum 18 credits.");
      return;
    }


    const confirmAdd = window.confirm(
      "You have chosen " + (totalCredits + addedCredits) +
      " credits for this semester. You cannot change once you submit. Do you want to confirm?"
    );

    if (!confirmAdd) return;

  
    selectedUnits.forEach(unit => {
      const courseId = parseInt(unit.dataset.courseId);
      const course = courses.find(c => c.courseId === courseId);
      totalCredits += course.credit;
      view.renderSelectedCourse(course);
      unit.remove(); 
    });

    view.updateTotalCredits(totalCredits);

 
    view.addBtn.disabled = totalCredits >= 18;
  });
});
