import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const profile = require("../../images/profile.jpg");

const Footer = () => {
  return (
    <div className="section-container border-t border-gray-700">
      <div className="flex flex-row items-center gap-4">
        <img
          src={profile}
          className="h-20 rounded-full hover:shadow-lg"
          alt="profile"
        />
        <p>jessicamarb98@gmail.com</p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <a
          href="https://github.com/jessbarnes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="clickable-white-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/jessica-barnes-8a4829148/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="clickable-white-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
