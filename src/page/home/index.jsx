import React from "react";
import Navber from "../../components/Navber/navber";
import Title from "../../components/Title/title";
import Topic from "../../components/Topic/topic";

export default function Index() {
  return (
    <div style={{ padding: "2% 10%" }}>
      <Navber />
      <Title />
      <Topic />
    </div>
  );
}
