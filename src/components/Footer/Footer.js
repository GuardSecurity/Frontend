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
        <div className="text-xs text-gray-400">@Copyright Guard System Studio</div>
      </div>
    </div>
    <div className="bg-[#1A242D] w-full sm:w-1/2 p-12 flex flex-col justify-between h-106 md:h-96">
      <div className="flex flex-row items-center">
        <img className="w-7 h-7" src={lightLogo} alt="Light logo" />
        <div className="w-24 ml-5 text-[#9A9AB0] text-3xl font-bold">Guard</div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15343.455683547993!2d108.2605568!3d15.9684812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142116949840599%3A0x365b35580f52e8d5!2zxJDhuqFpIGjhu41jIEZQVCAoRlBUIHVuaXZlcnNpdHkp!5e0!3m2!1sen!2s!4v1704797261104!5m2!1sen!2s"
          className="w-full h-3/4"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  </div>
);

export default Footer;
