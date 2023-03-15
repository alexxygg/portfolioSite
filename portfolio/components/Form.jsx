import UnderForm from "./UnderForm";

function Form() {
  return (
    <div className="contact col-11 m-auto" data-aos="fade-up">
      <h1 className="shadowed mb-5 contactH1 color-change-2x bracketDiv">
        Contact
      </h1>{" "}
      <h3 className=" text-center rgba ">
        Thank you for checking out my portfolio! <br />
        You can leave your details below, or send me an email!
      </h3>{" "}
      <div
        className=" text-center  my-3"
        style={{
          border: "solid white 2px",
          outline: "solid black 2px",
          backgroundColor: "red",
        }}
      >
        Form currently disabled.
      </div>
      <div className="  row row2 w-100 m-auto rgba mb-5">
        <form
          className="col col-10 col-lg-5 m-auto theForm rgba  "
          data-netlify="true"
          name="contact"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label htmlFor="exampleInputName1" className="text-primary">
              Name
            </label>
            <input
              type="text"
              className="exampleInputName1  bg-white form-control"
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
              className="exampleInputEmail1  bg-white form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small className=" emailHelp form-text  ">
              Your email will never be shared with anyone else. :D
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputMessage1" className="text-primary">
              Message
            </label>
            <textarea
              type="text"
              className="exampleInputMessage1  bg-white form-control mb-5"
              placeholder="Leave me a message"
            ></textarea>{" "}
          </div>
          <p></p>
          <button
            type="submit"
            value="Send"
            className="btn-primary w-100  blueToo submitBtn"
          >
            Send
          </button>
        </form>
        <UnderForm />
      </div>
    </div>
  );
}

export default Form;
