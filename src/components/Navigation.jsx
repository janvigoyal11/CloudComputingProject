import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
  const {user, loginWithRedirect, isAuthenticated,logout} = useAuth0();
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <header>
        {isAuthenticated
        ? <button className="btn2" onClick={(e)=>logout()}>Logout</button>
        : <button className="btn1" onClick={(e)=>loginWithRedirect()}>Login</button>
        }
        
      </header>

      <div>{isAuthenticated && <h3 className="mb-5">Hello {user.name}</h3>}</div>

    </nav>
  );
};

export default Navigation;
