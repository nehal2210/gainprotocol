import Screen3 from "./Screen3";

function Screen5() {
  return (
    <div className="container">
      <div className="video-container  top-0 w-100">
        <video id="video-bg" autoPlay={true} muted loop>
          <source src="../videos/blue.mp4"></source>
        </video>
      </div>
      <div
        className="row"
        style={{
          color: "white",
          position: "absolute",
          top: "210%",
          fontSize: "12px",
        }}
      >
        <div className="col">
          <p style={{ fontSize: "30px" }}>
            {" "}
            Dynamic <b>Liquidity Pool</b>
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <br />
          <p>
            <a>VIEW MORE</a>
          </p>

          <br />

          <p style={{ width: "50%" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <br />

          <div style={{ textAlign: "center" }}>
            <img src="/Images/circle1.png"></img>
            <p style={{ fontSize: "30px" }}>
              {" "}
              Static <b>Rewards:</b>
            </p>

            <p>
              asdsafsddffghdhhfgh fsdf sdflklsdkf lmsdfks;df; ;l&apos;ls&apos;dfl&apos;sd
              ld&apos;sfl
              <br />
              dsf;ls;lf&apos;lsd&apos;ldfl&apos;sldf&apos;ksdfksdfgsudhfih
            </p>
          </div>
        </div>
        <div className="col">
          <div
            style={{
              textAlign: "center",
              position: "absolute",
              top: "76%",
              //   marginLeft: "155px",
            }}
          >
            <img src="/Images/circle2.png"></img>
            <p style={{ fontSize: "30px" }}>
              {" "}
              Automatic <b>Sweepstakes:</b>
            </p>

            <p style={{ maxWidth: "500px" }}>
              asdsafsddffghdhhfgh fsdf sdflklsdkf lmsdfks;df; ;l&apos;ls&apos;dfl&apos;sd
              ld&apos;sfl asdsafsddffghdhhfgh fsdf sdflklsdkf lmsdfks;df;
              ;l&apos;ls&apos;dfl&apos;sd ld&apos;sflasdsafsddffghdhhfgh fsdf sdflklsdkf lmsdfks;df;
              ;l&apos;ls&apos;dfl&apos;sd ld&apos;sfl
              <br />
              dsf;ls;lf&apos;lsd&apos;ldfl&apos;sldf&apos;ksdfksdfgsudhfih
            </p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", color: "white", marginTop: "320px" }}>
        <p style={{ fontSize: "30px" }}>
          {" "}
          Here are the <b>7 sweepstakes protocol</b>
        </p>

        <p style={{ fontSize: "12px" }}>
          asdsafsddffghdhhfgh fsdf sdflklsdkf lmsdfks;df; ;l&apos;ls&apos;dfl&apos;sd ld&apos;sfl
          <br />
          dsf;ls;lf&apos;lsd&apos;ldfl&apos;sldf&apos;ksdfksdfgsudhfih
        </p>
      </div>
    </div>
  );
}

export default Screen5;
