import Screen9Box from "./Screen9Box";

function Screen9() {
  return (
    <div>
      <div className="video-container  top-0 w-100">
        <video id="video-bg" autoPlay={true} muted loop>
          <source src="../videos/s9v.mp4"></source>
        </video>
      </div>

      <div
        style={{
          color: "white",
          position: "absolute",
          maxWidth: "40%",
          marginLeft: "10%",
          marginTop: "-35%",
        }}
      >
        <h1>OUR WINNERS</h1>
        <p>
          asdssdsdasdddd ksdjfkldj ljlsdf
          <br />
          sdfsdfskdf;js;dkf;slflsld&apos;fj khdjsdjvjsd ljlosjdflsd
          ljolsdjfsnjslvsdvndknsd lflsdfsd fsdfsd sfsdfsd
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          marginTop: "-22%",
          marginLeft: "9%",
          display: "flex",
          justifyContent: "start",
          flexWrap: "wrap",
        }}
      >
        <Screen9Box />
        <Screen9Box />
      </div>

      <div>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "white", fontSize: "30px" }}>
            {" "}
            SWEEPSTAKES <b>WINNERS</b>
          </p>
          <p style={{ color: "white", fontSize: "15px" }}>
            dajodjas sfksdkfsd ksdpfksdf p ksdkfsdlsdf
          </p>
        </div>
      </div>
    </div>
  );
}

export default Screen9;
