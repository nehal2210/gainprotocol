function Screen7() {
  return (
    <div>
      {/* <img className="bgimg" src="Images/backgrounds/bg7.png"></img> */}
      <div style={{ marginTop: "20%", color: "white" }}>
        <div className="video-container  top-0 w-100">
          <video id="video-bg" autoPlay={true} muted loop>
            <source src="../videos/final.mp4"></source>
          </video>
        </div>

        <div
          style={{
            maxWidth: "30%",
            position: "absolute",
            marginLeft: "8%",
            marginTop: "-41%",
          }}
        >
          <p style={{ fontSize: "30px" }}>
            {" "}
            WE GIVE <b>BACK</b>
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>

        <div
          style={{
            color: "white",
            maxWidth: "100%",
            position: "absolute",
            marginLeft: "25%",
            textAlign: "center",
            marginTop: "-22%",
          }}
        >
          <p style={{ fontSize: "30px" }}>
            {" "}
            SMART CONTRACT IS <b>SAFE</b>
          </p>

          <p>
            Ouer Smart Contract comes with many features.<b>AND</b> ISSUES{" "}
            <b>ARE</b> <b className="gradient-text-color">NOT</b>{" "}
            <b>ONE OF THEM</b>
          </p>
        </div>

        <div
          style={{
            borderStyle: "dashed",
            borderColor: "#603172",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center",
            maxWidth: "50%",
            position: "absolute",
            marginLeft: "25%",
            marginTop: "-12%",
          }}
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and
          </p>
        </div>
        <div>
          <img src="/Images/s6logo.png" />
        </div>
      </div>
    </div>
  );
}

export default Screen7;
