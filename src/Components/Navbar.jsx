// import { useNavigate } from "react-router-dom";

// const First = () => {

// const navigate = useNavigate()

//     return (
//       <>
//         <h3>HOMEPAGE</h3>
//         <button onClick={() => navigate('/about')}>Check about</button>
//       </>
//     );
//   };

//   export default First;
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="mx-auto bg-blue-950">
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
