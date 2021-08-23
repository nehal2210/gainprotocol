import Screen10Box from "./Screen10Box";
import Screen9Box from "./Screen9Box";

function Screen10() {
  return (
    <div className="negative-margin">
      <img className="bg-image" src="/Images/backgrounds/bg10.png"></img>

      <div className="color-white flex-center mt-5 ">
        <h2>HODLERS</h2>
        <div className="vertical-line"></div>
        <h2>HODLERS</h2>
        <div className="vertical-line"></div>
        <h2>HODLERS</h2>
        <div className="vertical-line"></div>
        <h2>HODLERS</h2>
        <div className="vertical-line"></div>
        <h2>HODLERS</h2>
        <div className="vertical-line"></div>
        <h2>HODLERS</h2>
        <div className="vertical-line"></div>
        <h2>HODLERS</h2>
      </div>

      {/* <div> */}

      <div
        style={{
          marginTop: "50px",
        }}
      >
        <div
          style={{
            // position: "absolute",
            // marginTop: "-22%",
            // marginLeft: "9%",
            display: "flex",
            // justifyContent: "start",
            // flexWrap: "wrap",
          }}
        >
          <Screen9Box />
          <Screen9Box />
          <Screen9Box />
        </div>

        <div
          style={{
            // position: "absolute",
            marginTop: "20px",
            // marginLeft: "9%",
            display: "flex",
            // justifyContent: "start",
            // flexWrap: "wrap",
          }}
        >
          <Screen9Box />
          <Screen9Box />
          <Screen9Box />
        </div>
      </div>

      <div style={{ color: "white", textAlign: "center", marginTop: "10%" }}>
        <h3>COMMUNITY</h3>
        <p>
          Foundation is Great But Community is{" "}
          <b className="gradient-text-color">EVERYTHING</b>
        </p>
      </div>

      <div className="container my-5">
        <div className="row my-5">
          <div className="col-10 offset-md-1">
            <div className="row">
              <Screen10Box />
              <Screen10Box />
              <Screen10Box />
              <Screen10Box />
            </div>

            <div className="row my-5">
              <Screen10Box />
              <Screen10Box />
              <Screen10Box />
              <Screen10Box />
            </div>
          </div>

          <div className="color-white flex-center">
            <p>be sure to check jsdjfsk pkspdkf kpksdf kksdkf kskdfkksf k</p>
          </div>
        </div>
      </div>
      {/* </div> */}

      <style global jsx>
        {`
          .vertical-line {
            margin-right: 5px;
            margin-left: 5px;

            width: 1px;
            height: 33px;
            background-color: #fff;
            box-shadow: 0px 0px 5px 2px #fff;
          }
          .bg-image {
            position: absolute;
            z-index: -999;
          }
          .vl {
            border-left: 6px solid green;
            height: 500px;
          }

          .flex-center {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .color-white {
            color: white;
          }

          .negative-margin {
            margin-top: "-10px";
          }
        `}
      </style>
    </div>
  );
}

export default Screen10;
