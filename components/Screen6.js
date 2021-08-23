import Screen6Bullets from "./Screen6Bullets";

function Screen6() {
  return (
    <div>
      <div className="video-container  top-0 w-100">
        <video id="video-bg" autoPlay={true} muted loop>
          <source src="../videos/an5.mp4"></source>
        </video>
      </div>

      <div className="row">
        <div
          className="col"
          style={{
            marginTop: "-102px",
            position: "absolute",
            maxWidth: "40%",
            marginLeft: "8%",
          }}
        >
          <Screen6Bullets />

          <Screen6Bullets />
        </div>
        <div
          className="col"
          style={{
            position: "absolute",
            marginTop: "-447px",
            maxWidth: "40%",
            marginLeft: "54%",
          }}
        >
          <Screen6Bullets />
          <Screen6Bullets />
          <Screen6Bullets />
          <Screen6Bullets />
          <Screen6Bullets />
        </div>
      </div>
    </div>
  );
}

export default Screen6;
