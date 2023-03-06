function ProgressBar() {
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  return (
    <div className="header2">
      <div className="progress-container">
        <div className="myBar progress-bar" />
      </div>
    </div>
  );
}

export default ProgressBar;
