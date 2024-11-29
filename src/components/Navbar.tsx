import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row mt-10 md:mt-0 gap-3">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/work">Work</NavLink>
      <NavLink to="/education">Education</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </nav>
  );
};

export default Navbar;
