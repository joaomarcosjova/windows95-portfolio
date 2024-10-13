import { useState } from "react";
import { badges } from "../../content/badges";
import resumeUrl from "/assets/pdf/mycv-en.pdf";

const About = ({ isMaximized }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div
      className={`flex flex-col gap-[35px] px-5 sm:px-[70px] py-[30px]  h-full overflow-y-auto ${
        isMaximized ? "pb-[100px] sm:pb-[50px]" : ""
      }`}
    >
      <div
        className={`flex sm:flex-row flex-col sm:gap-10 items-center sm:items-start justify-start`}
      >
        <img
          src="/assets/profilePic.jpg"
          alt="profilePhoto"
          className="border-s-[2px] border-s-[#fafafa] border-t-[2px] border-t-[#fafafa] border-black border-[1px] w-[220px]"
        />
        <div className=" flex flex-col sm:items-start items-center  gap-1 mt-4 sm:mt-14">
          <h2
            className={` font-extrabold ${
              isMaximized ? " text-[40px]" : "text-[30px]"
            }`}
          >
            Marcos Jova
          </h2>
          <h2
            className={` font-extrabold ${
              isMaximized ? " text-[25px]" : "text-[16px]"
            }`}
          >
            Security Engineer
          </h2>
          <h4
            className={` text-red-700 ${
              isMaximized ? " text-[20px]" : "text-[16px]"
            }`}
          >
            📍 undisclosed location.
          </h4>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
        {badges.map((url, i) => {
          return <img src={url} alt="badge" key={i} />;
        })}
      </div>
      <div>
        <h4 className=" font-bold pb-3">About Me</h4>
        <p className=" before:ps-7">
          Hello, I'm Joao Marcos Jova, a dedicated cybersecurity and software engineer. I have a passion for building secure, high-performing applications that prioritize user safety and data integrity. With expertise in both software development and cybersecurity, I thrive on solving complex technical challenges and creating solutions that are not only efficient but also robust against emerging security threats.
          <span
            className={`text-blue-500 ps-2 cursor-pointer ${
              seeMore ? "hidden" : ""
            }`}
            onClick={() => setSeeMore((prev) => !prev)}
          >
            see more...
          </span>
        </p>
        {seeMore && (
          <>
          <br/>
          <h4 className=" font-bold">Work Experience</h4>
          <br/>
          <ul className="list-disc pl-5 space-y-4">
            <p>
              <strong>Kadosh Softwares</strong> 
              <ul className="list-disc pl-5">
                <li>
                  <strong>Project Manager</strong> (Promoted)
                  <p className="text-sm pt-2">
                    Led teams in the successful delivery of complex software projects. Managed project timelines, resources, and client communications, ensuring projects were completed on time and within budget.
                  </p>
                </li>
                <li>
                  <strong>Software Engineer</strong> (2023 - Present)
                  <p className="text-sm pt-2">
                    Designed, developed, and implemented various software projects with a focus on web applications and cybersecurity solutions. Collaborated with clients to deliver tailored software products.
                  </p>
                </li>
              </ul>
            </p>
            <p>
              <strong>Delta Airlines</strong> 
              <ul className="list-disc pl-5">
                <li>
                IT Support (2022 - 2023) 
                  </li>
                  </ul>
              <p className="text-sm pt-2">
                Provided technical support to airline staff, resolving hardware and software issues. Ensured the smooth operation of IT systems, troubleshooting network problems, and offering solutions to improve efficiency.
              </p>
            </p>
            <p>
              <strong>Bigbird Transportation</strong> 
              <ul className="list-disc pl-5">
                <li>
                Software Engineer (2021 - 2022) 
                  </li>
                  </ul>
              <p className="text-sm pt-2">
                Developed and maintained internal software solutions to optimize logistics, transportation scheduling, and vehicle tracking. Collaborated with cross-functional teams to ensure smooth delivery of software solutions.
              </p>
            </p>
          </ul>

            <p>
              <span
                className={`text-blue-500 ps-1 cursor-pointer ${
                  !seeMore ? "hidden" : ""
                }`}
                onClick={() => setSeeMore((prev) => !prev)}
              >
                (hide)
              </span>
            </p>
          </>
        )}
        <div className=" flex justify-center">
          <a
            target="_blank"
            href={resumeUrl}
            download
            className=" flex mt-10 w-fit justify-center items-center gap-[5px] p-[5px] text-sm border-t-[#dfdfdf]  border-e-[grey]  border-b-[grey] border-s-[#dfdfdf] border-[2px] hover:border-e-[#dfdfdf]  hover:border-s-[grey]  hover:border-t-[grey] hover:border-b-[#dfdfdf] hover:bg-[#b5b5b5] transition-all "
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
