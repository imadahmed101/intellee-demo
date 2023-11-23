import { Private, Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import MainLayout from './layouts/MainLayout/MainLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Set wrap={ScaffoldLayout} title="Courses" titleTo="courses" buttonLabel="New Course" buttonTo="newCourse">
          <Route path="/admin/courses/new" page={CourseNewCoursePage} name="newCourse" />
          <Route path="/admin/courses/{id:Int}/edit" page={CourseEditCoursePage} name="editCourse" />
          <Route path="/admin/courses/{id:Int}" page={CourseCoursePage} name="course" />
          <Route path="/admin/courses" page={CourseCoursesPage} name="courses" />
        </Set>
      </Private>
      <Set wrap={MainLayout}>
        <Route path="/course/{id:Int}" page={CoursePage} name="viewcourse" />
        <Route path="/allcourses" page={CoursesPage} name="allcourses" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
