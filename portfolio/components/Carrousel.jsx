function Carrousel() {
  return (
    <div
      className="carouselExampleIndicators1 carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="./alternatePortfolioPic.jpg"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="../codePortfolio.jpg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="./thirdPicPortfolio.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      {/* <a
        className="carousel-control-prev "
        href="#carouselExampleIndicators2"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators3"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a> */}
      {/* <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators1" data-slide-to="0"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
      </ol> */}
    </div>
  );
}

export default Carrousel;
