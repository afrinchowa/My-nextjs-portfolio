import React from "react";

const DownloadResumeButton: React.FC = () => {
  return (
    <div className="flex justify-center my-8">
      <a
        href="https://drive.google.com/file/d/1nvyYl-2AANCylAZtlq6X0Io6_lcDDNGb/view?usp=sharing" // Replace this with your actual file path
        download="Chowa's.pdf" // Customize the name of the downloaded file
        className="btn bg-[#49d9d3] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#28b6b3] transition-all duration-300"
      >
        Download My Resume
      </a>
    </div>
  );
};

export default DownloadResumeButton;
