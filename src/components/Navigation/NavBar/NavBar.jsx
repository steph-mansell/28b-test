import React from "react";
import "./NavBar.css";
import Welcome from "../Welcome/Welcome";
import NavSection from "../NavSection/NavSection";

const sections = [
  { name: "Metrics", items: ["Overview", "Detailing", "Calls"] },
  { name: "Information", items: ["About profiles", "Detailing targets"] },
];

function NavBar() {
  return (
    <nav>
      <Welcome name="Andy Repp" />
      {sections.map((section) => (
        <NavSection section={section} />
      ))}
    </nav>
  );
}
export default NavBar;
