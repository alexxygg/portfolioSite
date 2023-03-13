function FillerOnly() {
  return (
    <div data-aos="fade-up" className="about">
      <div
        className="bracketDiv shadowed col-11 ml-auto m-auto mb-5 "
        style={{ borderBottom: "solid rgb(4, 238, 81)" }}
      >
        <h1 className="color-change-2x">About Developer:</h1>
      </div>
      <div
        className="row  blob m-auto "
        style={{ borderBottom: "solid rgb(4, 238, 81)" }}
      >
        <div className="bracketDiv2 col-3">
          <img
            className="img shadowed m-auto color-change-3x"
            src="profilePic3.png"
          />
        </div>
        <div
          className="shadowedLess m-auto col-8  "
          style={{ borderTop: "solid black", borderBottom: "solid black" }}
        >
          <div className="showcaseDiv w-100 aboutFirst">
            <div>
              <div
                className="my-0 gradientPaletteExample newRule px-4"
                style={{
                  borderTop: "solid rgb(4, 238, 81)",
                  backgroundColor: "black",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                }}
              >
                Alejandro Perez...
              </div>
            </div>
            <div>
              <div
                className=" bigger exampleOutlineGradientDiv  newRule2 px-4"
                style={{
                  paddingBottom: "10px",
                }}
              >
                Front-end and Back-end self-taught developer.
              </div>
            </div>{" "}
          </div>{" "}
          <div className="fillerOnly gradientColor text-center color-change-5x ">
            <div className="m-0 color-change-4x aboutText">
              <div className="p-4">
                Hi, I'm Alex, a passionate 23-year-old who is dedicated to
                producing high-quality work.{" "}
                <span>
                  As a self-taught developer seeking an entry-level position as
                  a Jr. Dev, I have experience working with a range of
                  technologies including React, React Router, Next.js, EJS,
                  MongoDB, Supabase, Node, and other languages, frameworks and
                  libraries.
                </span>
              </div>
              <h6 className="p-4 ">
                I approach every project with enthusiasm, problem-solve and
                deliver solutions. I always strive to create efficient code that
                is easy to maintain and build upon, whether on the front-end or
                back-end.
              </h6>{" "}
              <h6 className="p-4 ">
                Current laptop has Ryzen7 and 16GB RAM, I'm well-equipped to
                tackle even the most complex projects. I'm eager to continue
                expanding my skills and experience as a developer and am excited
                to take on new challenges in a professional setting.
              </h6>{" "}
              <h6 className="p-4 text-center">Hope to work with you soon!</h6>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FillerOnly;
