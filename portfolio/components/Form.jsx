import UnderForm from "./UnderForm";
import axios from "axios";

function Form() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const response = await axios.post("/", formData);
    console.log(response); // Log the response from the server
    form.reset(); // Clear the form fields
  };
  return (
    <div className="contact col-11 m-auto" data-aos="fade-up">
      <h1 className="shadowed mb-5 contactH1 color-change-2x ">Contact</h1>{" "}
      <h3 className="mb-5 text-center">
        Thank you for checking out my portfolio! <br />
        You can leave your details below, or send me an email!
      </h3>{" "}
      <div className="  row w-100 m-auto">
        <form
          className="col col-10 col-lg-5 m-auto theForm"
          encType="text/plain"
          onSubmit={handleSubmit}
          data-netlify="true"
          name="contact"
          method="POST"
          netlify
        >
          <input type="hidden" name="contact" value="contact" />
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
              Your email will never be shared with anyone else. :D
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputMessage1" className="text-primary">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              className="exampleInputMessage1 shadowedLess bg-white form-control mb-5"
              placeholder="Leave me a message"
            ></textarea>{" "}
          </div>
          <p></p>
          <button
            type="submit"
            value="Send"
            className="btn-primary mb-5 w-100 shadowed blueToo submitBtn"
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
