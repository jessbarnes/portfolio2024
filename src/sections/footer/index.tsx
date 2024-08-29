import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillCaretUp,
  AiFillMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="-mb-6 border-t border-gray-700 relative w-full">
        <div className="absolute -top-5 md:-top-8 text-white w-full flex justify-center">
          <button
            className="clickable-white-icon"
            onClick={() => window.scrollTo(0, 0)}
          >
            <AiFillCaretUp />
          </button>
        </div>
      </div>
      <div className="section-container">
        <div className="section-subcontainer">
          <div className="flex flex-row items-center gap-4">
            <a href="mailto:jessicamarb98@gmail.com">
              <AiFillMail className="clickable-white-icon" />
            </a>
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
          <p className="text-xs md:text-sm -mb-2">© JB 2024</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
