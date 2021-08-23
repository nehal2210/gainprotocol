function Screen11() {
  return (
    <div>
      <div className="video-container  top-0 w-100">
        <video id="video-bg" autoPlay={true} muted loop>
          <source src="../videos/sc11.mp4"></source>
        </video>
      </div>

      <div className="container" style={{ position: "relative" }}>
        <div className="row">
          <div
            className="col"
            style={{
              //   display: "flex",
              top: "-1064px",
              position: "absolute",
              //   maxWidth: "3%",
            }}
          >
            <div className="color-white">
              <h4>HOW ARE WE DOING</h4>
              <p>
                sdaadassd fsdfs fsdfsd sdfsdf sdf ff sds fdfgf fsfs dfsd sdf
                sdfsdf sdf
              </p>

              <div
                style={{
                  marginRight: "13px",
                  marginTop: "15px",

                  float: "left",
                  backgroundImage:
                    "linear-gradient(to right, #16151f , #e3e3e36b)",
                  //   width: "min-content;",
                  color: "white",
                  borderRadius: "15px",
                  padding: "12px 30px 12px  17px ",
                }}
              >
                <p style={{ margin: "2px", fontSize: "10px" }}>
                  GIVE US FEEDBACK
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="color-white"
              style={{
                textAlign: "center",
                position: "absolute",
                top: "-779px",
                maxWidth: "50%",
                marginLeft: " 55%",
              }}
            >
              <h4>HOW ARE WE DOING</h4>
              <p>
                sdaadassd fsdfs fsdfsd sdfsdf sdf ff sds fdfgf fsfs dfsd sdf
                sdfsdf sdf jsdfj ;ksdfk ;ksdf sujdf ujsdoujf ousof sdkoisf
                sfsjsd sdfjsdkf pikfps p;iksdf sdfsdlflsdf ksdpdkfpksdf
                sdfspjfsdfkp;sdkflmsfjslf lkfp;ks posjdfksd i
              </p>
            </div>
          </div>
        </div>

        <div
          className="color-white"
          style={{
            textAlign: "center",
            position: "absolute",
            top: " -415px",
            maxWidth: "52%",
            marginLeft: "22%",
          }}
        >
          <h4>HOW ARE WE DOING</h4>
          <p>
            sdaadassd fsdfs fsdfsd sdfsdf sdf ff sds fdfgf fsfs dfsd sdf sdfsdf
            sdf jsdfj ;ksdfk ;ksdf sujdf ujsdoujf ousof sdkoisf sfsjsd sdfjsdkf
            pikfps p;iksdf sdfsdlflsdf ksdpdkfpksdf sdfspjfsdfkp;sdkflmsfjslf
            lkfp;ks posjdfksd i
          </p>
        </div>
      </div>

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

        
          }
        `}
      </style>
    </div>
  );
}

export default Screen11;
