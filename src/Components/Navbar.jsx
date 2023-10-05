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
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import github from "../Assets/github.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#1C2336] h-22">
        <div className="flex flex-row justify-center items-center h-[100px] mx-4 text-white font-poppins">
          <div className="w-32">
            <img src={logo} alt="" />
          </div>
          <div className="flex items-center gap-10 mx-auto">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/about")}>About</button>
            <button onClick={() => navigate("/portofolio")}>Portofolio</button>
          </div>
          <div className="">
            <div className="w-12 h-12">
              <a href="">
                <img src={github} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
