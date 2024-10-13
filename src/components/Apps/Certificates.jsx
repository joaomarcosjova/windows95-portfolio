import { FiGithub, FiExternalLink } from "react-icons/fi";
import { certificates } from "../../content/certificates";

const Certificates = ({ isMaximized }) => {
  return (
    <div
      className={`flex flex-col gap-5 p-4 w-full h-[100%] overflow-y-scroll ${
        isMaximized ? "pb-[100px] sm:pb-[50px]" : ""
      }`}
    >
      {certificates.map((certificates, i) => {
        return (
          <div
            className=" flex sm:flex-row flex-col sm:flex:row gap-7 bg-[#eaeaeaaf] w-full p-4"
            key={i}
          >
            <div className=" flex flex-col sm:w-full items-center">
              <img
                src={certificates.imagePath}
                alt=""
                className={`${isMaximized ? "w-[80%]" : "w-full"}`}
              />
            </div>

            <div className="sm:w-[50%] flex flex-col gap-2 justify-center pe-5">
              <div className="mt-2 flex justify-center sm:justify-end gap-5">
                <a href={certificates.websiteLink} target="_blank">
                  <FiExternalLink
                    size="30px"
                    color="blue"
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
