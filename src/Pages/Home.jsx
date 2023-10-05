import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import wavhand from "../Assets/wavhand.png";
import self from "../Assets/self.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-[636px] bg-[#0B1121] auto-rows-auto">
        <div className="flex h-96 w-auto bg-[#0B1121]">
          {/* Kiri */}
          <div className="pl-96 pr-52 mt-52">
            <div className="flex items-center">
              <p className="text-[#DBFF00]">Hello World</p>
              <div className="w-10 h-10 mx-2">
                <img src={wavhand} alt="" />
              </div>
            </div>
            <div className="text-white">
              <h1>Alif Fatwa Ramadhani</h1>
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

          {/* Kanan */}
          <div className="">
            <div className="pr-80">
              <div className="pt-10 max-w-max">
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
