import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>

<nav className="navbar navbar-expand-sm bg-light">

<div className="container-fluid">
 
  <ul className="navbar-nav">
    <li className="nav-item">
    <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
       <Link className="nav-link" to="/addemp">Add Emp</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/listemp">List All Emps</Link>
    </li>
 </ul>
</div>

</nav>
      
      <Outlet />
    </>
  )
};
export default Layout;

