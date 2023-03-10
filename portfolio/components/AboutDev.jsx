function FillerOnly() {
  return (
    <div data-aos="fade-up" className="about">
      <div className="bracketDiv shadowed col-11 ml-auto mr-auto mb-5 ">
        <h1 className="color-change-2x">About Developer:</h1>{" "}
      </div>{" "}
      <div className="row  blob m-auto ">
        {" "}
        <div className="bracketDiv col-4  ">
          <img
            className="img shadowed m-auto color-change-3x"
            src="profilePic3.png"
          ></img>
        </div>
        <div className="shadowedLess m-auto col-7 ">
          <div className="fillerOnly gradientColor text-center color-change-5x ">
            <img src="./leftBracket.png" />
            <h4 className="mb-5 color-change-4x">
              I am passionate and enjoy front-end technologies, giving all my
              effort on every project I get. Hope to work with you soon!
            </h4>{" "}
            <div className="bracketDiv">
              <p className="color-change-4x">I love the tech world;</p>
            </div>
            <div className=" bracketDiv">
              <p className="color-change-4x">I like petting/walking dogs;</p>
            </div>
            <div className=" bracketDiv">
              {" "}
              <p className="color-change-4x">I am 23 years old;</p>
              <img src="./rightBracket.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FillerOnly;
