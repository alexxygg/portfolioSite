function Form() {
  const clickHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact" data-aos="fade-up">
      <h1 className="shadowed mb-5 contactH1 color-change-2x">Contact</h1>{" "}
      <h3 className="mb-5 text-center">
        Thank you for checking out my portfolio! <br />
        Leave your details below, or send me an email!
      </h3>{" "}
      <div className=" theForm row w-100 m-auto">
        <form
          className="col col-10 col-lg-5 m-auto "
          onSubmit={clickHandler}
          action="mailto:alexxygg@gmail.com"
          encType="text/plain"
        >
          <div className="form-group">
            <label htmlFor="exampleInputName1" className="text-primary">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="exampleInputName1 shadowedLess bg-white form-control"
              aria-describedby="nameHelp"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="text-primary">
              Email address
            </label>
            <input
              type="email"
              name="replyTo"
              className="exampleInputEmail1 shadowedLess bg-white form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small className=" emailHelp form-text  ">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputMessage1" className="text-primary">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              className="exampleInputMessage1 shadowedLess bg-white form-control"
              placeholder="Leave me a message"
            ></textarea>{" "}
          </div>
          <p></p>
          <button
            type="submit"
            value="Send"
            className="btn-primary mb-5 w-100 shadowed blueToo"
          >
            Submit
          </button>
        </form>
        <div className="sideOfForm col col-10 col-lg-5 m-auto shadowedLess color-change-5x">
          <div className="color-change-4x">
            You can also contact me through email. <br />
            <p></p>
            <p></p>
            <span style={{ color: "rgb(4,238,81)" }}>Click</span> on my
            <span style={{ color: "rgb(4,238,81)" }}> email address </span>
            <br /> to create a new Gmail draft with me in a NEW TAB. <br />{" "}
            <p></p>
            <p></p>
            <a
              // target for open link in new tab
              target="_blank"
              className="emailSpam text-primary text-decoration-none"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alexxygg@gmail.com"
            >
              alexxygg@gmail.com
            </a>
          </div>
        </div>{" "}
      </div>{" "}
      <button className="downloadCV shadowed btn" type="button">
        <a
          className="resumeLink"
          href="./ourResume.pdf"
          download="Alejandro-Perez-RESUME"
        >
          Click to: &nbsp; ***DOWNLOAD MY RESUME***
        </a>
      </button>
    </div>
  );
}

export default Form;
