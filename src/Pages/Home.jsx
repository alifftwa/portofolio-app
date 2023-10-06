import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import wavhand from "../Assets/wavhand.png";
import self from "../Assets/self.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="max-h-max bg-[#0B1121] auto-rows-auto">
        <div className="flex h-full w-full bg-[#0B1121]">
          {/* Left */}
          <div className="pl-96 pr-52 mt-72">
            <div className="flex items-center">
              <p className="text-[#DBFF00] text-[30px]">Hello World</p>
              <div className="w-10 h-10 mx-2">
                <img src={wavhand} alt="" />
              </div>
            </div>
            <div className="text-white text-[37px]">
              <h1>I'm Alif Fatwa Ramadhani</h1>
            </div>
            <div className="">
              <p className="text-white font-thin">
                someone who wants to continue learning about new things,
                especially website development. I am very interested in that, I
                also study other things such as graphic design and video
                editing.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="h-full">
            <div className="pr-80">
              <div className="pt-[166px] max-w-max">
                <img src={self} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
