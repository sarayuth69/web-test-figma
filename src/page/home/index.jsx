import React from "react";
import Navber from "../../components/Navber/navber";
import Title from "../../components/Title/title";
import Topic from "../../components/Topic/topic";
import Courses from "../../components/Courses/courses";
import CoursesOnline from "../../components/CoursesOnline/coursesOnline";
import Blog from "../../components/Blog/blog";

export default function Index() {
  return (
    <div style={{ padding: "2% 10%" }}>
      <Navber />
      <Title />
      <Topic />
      <Courses />
      <CoursesOnline />
      <Blog />
    </div>
  );
}
