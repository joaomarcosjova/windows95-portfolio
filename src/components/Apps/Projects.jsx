import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../../content/projects";

const Projects = ({ isMaximized }) => {
  return (
    <div
      className={`flex flex-col gap-5 p-4 w-full h-[100%] overflow-y-scroll ${
        isMaximized ? "pb-[100px] sm:pb-[50px]" : ""
      }`}
    >
      {projects.map((project, i) => {
        return (
          <div
            className=" flex sm:flex-row flex-col sm:flex:row gap-7 bg-[#eaeaeaaf] w-full p-4"
            key={i}
          >
            <div className=" flex flex-col sm:w-1/2 items-center">
              <img
                src={project.imagePath}
                alt=""
                className={`${isMaximized ? "w-[80%]" : "w-full"}`}
              />
              <div className=" sm:flex hidden m-3 mx-auto gap-2 flex-wrap justify-center">
                {project.techStack.map((tech, i) => {
                  return (
                    <img src={tech} key={i} alt="badges" className="h-[23px]" />
                  );
                })}
              </div>
            </div>
            <div className="sm:w-[47%] flex flex-col gap-2 justify-center pe-5">
              <h2 className=" font-extrabold text-2xl">{project.name}</h2>

              <p className=" text-sm">{project.description}</p>
              <div className=" sm:hidden flex m-3 mx-auto gap-2 flex-wrap justify-center">
                {project.techStack.map((tech, i) => {
                  return (
                    <img key={i} src={tech} alt="badges" className="h-[25px]" />
                  );
                })}
              </div>
              <div className="mt-2 flex justify-center sm:justify-end gap-5">
                <a href={project.githubLink} target="_blank">
                  <FiGithub
                    size="30px"
                    color="grey"
                    className="hover:cursor-pointer"
                  />
                </a>
                <a href={project.websiteLink} target="_blank">
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
       <div className=" flex justify-center">
          <a
            target="_blank"
            href="https://github.com/joaomarcosjova?tab=repositories"
            download
            className=" flex mt-10 w-fit justify-center items-center gap-[5px] p-[5px] text-sm border-t-[#dfdfdf]  border-e-[grey]  border-b-[grey] border-s-[#dfdfdf] border-[2px] hover:border-e-[#dfdfdf]  hover:border-s-[grey]  hover:border-t-[grey] hover:border-b-[#dfdfdf] hover:bg-[#b5b5b5] transition-all "
          >
           Expore More Projects
          </a>
        </div>
    </div>
    
  );
};

export default Projects;
