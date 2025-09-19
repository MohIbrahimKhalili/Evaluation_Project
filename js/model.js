class CourseModel {
  constructor() {
    this.courses = [];
  }

  async fetchCourses() {
    const res = await fetch("http://localhost:3000/courses");
    this.courses = await res.json();
    return this.courses;
  }
}
