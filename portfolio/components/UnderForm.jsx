import React from "react";

function UnderForm() {
  return (
    <>
      <div className="sideOfForm col col-10 col-lg-5  shadowedLess color-change-5x mt-5">
        <div className="color-change-4x w-100 h-100 ">
          <div>
            You can also contact me through email. <br />
          </div>
          <div>
            <span style={{ color: "rgb(4,238,81)" }}>Click</span> on my
            <span style={{ color: "rgb(4,238,81)" }}> email address </span>
            <br /> to create a new Gmail draft with me in a NEW TAB. <br />
          </div>
          <div>
            <a
              // target for open link in new tab
              target="_blank"
              className="emailSpam text-primary text-decoration-none"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alexxygg@gmail.com"
            >
              alexxygg@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div>
        <button className="downloadCV shadowed btn my-5" type="button">
          <a
            className="resumeLink"
            href="./ourResume.pdf"
            download="Alejandro-Perez-RESUME"
          >
            Click to: &nbsp; ***DOWNLOAD MY RESUME***
          </a>
        </button>
      </div>
    </>
  );
}

export default UnderForm;
