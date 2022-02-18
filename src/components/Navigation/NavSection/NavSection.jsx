import "./NavSection.css";

function NavSection(props) {
  return (
    <div className="nav-section">
      <p className="name">{props.section.name}</p>
      {props.section.items.map((item) => {
        return (
          <a href="/#" className="items">
            {item}
          </a>
        );
      })}
    </div>
  );
}

export default NavSection;
