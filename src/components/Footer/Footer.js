import lightLogo from "../../assets/lightLogo.png";
import sendIcon from "../../assets/send.png";

const Footer = () => (
  <div className="w-full flex flex-col sm:flex-row items-center mt-20">
    <div className="bg-[#27343F] w-full sm:w-1/2 p-12 flex flex-col justify-between h-96">
      <div className="w-auto text-white text-4xl font-bold tracking-tight">
        If you have any question, Let us help you!
      </div>
      <div className="flex flex-wrap">
        <input
          className="rounded-lg w-96 h-14 px-4"
          placeholder="Input your email here"
        />
        <button className="bg-[#C7923E] px-4 w-16 h-14 rounded-lg flex items-center justify-center ml-2">
          <img src={sendIcon} alt="Send icon" />
        </button>
      </div>
      <div className="w-96 text-white  leading-tight tracking-tight">
        Copyright GuardGuard Studio
      </div>
    </div>
    <div className="bg-[#1A242D] w-full sm:w-1/2 p-12 flex flex-col justify-between h-106 md:h-96">
      <div className="flex flex-row items-center">
        <img className="w-7 h-7" src={lightLogo} alt="Light logo" />
        <div className="w-24 ml-5 text-[#9A9AB0] text-3xl font-bold">Guard</div>
      </div>
      <div className="text-white  leading-tight tracking-tight mt-4 ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div className=" text-white  leading-tight tracking-tight mt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
          <div>Home</div>
          <div>About Us</div>
          <div>Our Team</div>
          <div>Room & Suites</div>
          <div>Restaurant & Bar</div>
          <div>Blog</div>
          <div>Packages</div>
          <div>Events</div>
          <div>Contact Us</div>
          <div>Voucher</div>
          <div>Gallery</div>
          <div>Careers</div>
          <div>Promo</div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
