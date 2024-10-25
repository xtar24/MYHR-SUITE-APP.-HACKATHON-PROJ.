import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 w-screen shadow-lg">
      <div className="h-[70px] flex justify-between items-center container mx-auto">
        <div>
          <div>{<Link to="/" className="font-extrabold text-5xl text-orange-600">MY HR-SUITE</Link>}</div>
        </div>
        <div className="flex justify-evenly flex-1 text-xl font-bold">
          <NavLink to={"#"}>Home</NavLink>
          <NavLink to={"#"}>About</NavLink>
          <NavLink to={"#"}>Pricing</NavLink>
          <NavLink to={"#"}>Contact</NavLink>
          <NavLink to={"#"}>Login</NavLink>
          <NavLink to={"#"}>Start free trial</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
