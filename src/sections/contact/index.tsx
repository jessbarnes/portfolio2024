import RowCard from "../../components/RowCard";

const profile = require("../../images/profile.jpg");

const Contact = () => {
  return (
    <div className="section-container">
      <div className="section-subcontainer">
        <h1>Contact</h1>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <img
            src={profile}
            className="h-20 lg:h-36 rounded-full hover:shadow-lg"
            alt="profile"
          />
          <RowCard
            title="Thank you for checking out my portfolio!"
            body={
              <div className="flex flex-col gap-2 pt-2">
                <p>
                  Don't forget to take a peek at my source code on{" "}
                  <a
                    href="https://github.com/jessbarnes/portfolio2024"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github
                  </a>
                  !
                </p>
                <p>
                  Interested in my work? You can access my resume{" "}
                  <a
                    href="https://docs.google.com/document/d/1eugwMY0P6FvfDmU5DucNTVkJw1EH_35L9iLS5ftrMTQ/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </p>
                <p>
                  Feel free to reach out to me at{" "}
                  <a href="mailto:jessicamarb98@gmail.com">
                    jessicamarb98@gmail.com
                  </a>
                  .
                </p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
