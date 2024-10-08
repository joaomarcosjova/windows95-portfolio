import { FiGithub, FiExternalLink } from "react-icons/fi";
import { certificates } from "../../content/certificates";

const Certificates = ({ isMaximized }) => {
  return (
    <div
      className={`flex flex-col gap-5 p-4 w-full h-[100%] overflow-y-scroll ${
        isMaximized ? "pb-[100px] sm:pb-[50px]" : ""
      }`}
    >
      {certificates.map((certificate, i) => {
        return (
          <div
            className=" flex sm:flex-row flex-col sm:flex:row gap-7 bg-[#eaeaeaaf] w-full p-4"
            key={i}
          >
            <div className=" flex flex-col sm:w-1/2 items-center">
              <img
                src={certificate.imagePath}
                alt=""
                className={`${isMaximized ? "w-[80%]" : "w-full"}`}
              />
              <div className=" sm:flex hidden m-3 mx-auto gap-2 flex-wrap justify-center">
                {certificate.techStack.map((tech, i) => {
                  return (
                    <img src={tech} key={i} alt="badges" className="h-[23px]" />
                  );
                })}
              </div>
            </div>
            <div className="sm:w-[47%] flex flex-col gap-2 justify-center pe-5">
              <h2 className=" font-extrabold text-2xl">{certificate.name}</h2>

              <p className=" text-sm">{certificate.description}</p>
              <div className=" sm:hidden flex m-3 mx-auto gap-2 flex-wrap justify-center">
                {certificate.techStack.map((tech, i) => {
                  return (
                    <img key={i} src={tech} alt="badges" className="h-[25px]" />
                  );
                })}
              </div>
              <div className="mt-2 flex justify-center sm:justify-end gap-5">
                <a href={certificates.githubLink} target="_blank">
                  <FiGithub
                    size="30px"
                    color="grey"
                    className="hover:cursor-pointer"
                  />
                </a>
                <a href={certificate.websiteLink} target="_blank">
                  <FiExternalLink
                    size="30px"
                    color="grey"
                    className="hover:cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Certificates;
