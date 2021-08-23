import Footer from "./Footer";
import Screen13Box from "./Screen13Box";

function Screen13() {
  return (
    <div className="color-white" style={{ position: "relative" }}>
      <img className="bg-image" src="/Images/backgrounds/bg13.png"></img>

      <div
        style={{
          textAlign: "center",
          width: "50%",
          position: "absolute",
          right: "327px",
        }}
      >
        <p>
          The Dream <b>Team</b>
        </p>
        <p>
          Gain Protocol dsdf kk dfodfj jsodjs dfogjd jojfdg ojdf goefe pkdpf pds
          pidkfn oljsdf pksdf ksdjf ksdfk p;ksdf lkpsdkf sfsd
        </p>
      </div>
      {/* Team Section */}
      {/* <Screen13Box/> */}

      <Footer />

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

export default Screen13;
