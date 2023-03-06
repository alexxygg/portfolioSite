function NIceRow({ oddNumber }) {
  const gradientBorders = () => {
    return `linear-gradient(
    90deg,
    rgb(4, 238, 81) 0%,
    rgb(14, 38, 181) 33%,
    rgb(40, 1, 181) 66%,
    rgb(140, 38, 81) 100%
    )`;
  };

  return (
    <div data-aos="fade-up" data-aos-easing="linear">
      <div style={{ borderTopColor: gradientBorders() }} className="footer">
        <div className="divRows">
          <div className="even color-change-3x"></div>
          <div className="even color-change-3x"></div>
          <div className="odd color-change-3x"></div>
          <div className="odd color-change-3x"></div>
          <div className="even color-change-3x"></div>
          <div className="even color-change-3x"></div>
          <div className="odd color-change-3x"></div>
          <div className="odd color-change-3x"></div>
          <div className="even color-change-3x"></div>
          <div className="even color-change-3x"></div>
          <div className="odd color-change-3x"></div>
          <div className="odd color-change-3x"></div>
          <div className="even color-change-3x"></div>
          <div className="even color-change-3x"></div>
          <div className="odd color-change-3x"></div>
          <div className="odd color-change-3x"></div>
          <div className="even color-change-3x"></div>
          <div className="even color-change-3x"></div>
          <div className="odd color-change-3x"></div>
          <div className="odd color-change-3x"></div>
          <div className="even color-change-3x"></div>
          <div className="even color-change-3x"></div>
          <div className="odd color-change-3x"></div>
          <div className="odd color-change-3x"></div>
          <div className="even color-change-3x"></div>
          <div className="even color-change-3x"></div>
          <div className="odd color-change-3x"></div>
          <div className="odd color-change-3x"></div>
          <div className="even color-change-3x"></div>
          <div className="even color-change-3x"></div>
          <div className="odd color-change-3x"></div>
          <div className="odd color-change-3x "></div>
          <div className="even color-change-3x"></div>
          <div className="even color-change-3x"></div>
        </div>
      </div>
    </div>
  );
}

export default NIceRow;
