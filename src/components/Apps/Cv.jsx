import { useState } from "react";
import resumeUrl from "/assets/pdf/mycv-en.pdf";

const Cv = ({ isMaximized }) => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div
      className={`flex flex-col gap-[35px] px-5 sm:px-[70px] py-[30px] h-full overflow-y-auto ${
        isMaximized ? "pb-[100px] sm:pb-[50px]" : ""
      }`}
    >
      <h2
        className={`font-extrabold ${
          isMaximized ? "text-[40px]" : "text-[30px]"
        }`}
      >
        Marcos Jova's CV
      </h2>

      <div className="flex justify-center items-center mt-10">
        {/* Display the PDF */}
        <iframe
          src={resumeUrl}
          width="100%"
          height="600px"
          className="border-[2px] border-gray-300"
          title="CV"
        />
      </div>
    </div>
  );
};

export default Cv;
