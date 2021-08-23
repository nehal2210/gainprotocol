import { FaTelegramPlane, AiOutlineTwitter } from "react-icons/fa";

function Screen13Box() {
  return (
    <div>
      <div className="main-container">
        <div>
          <div className="box-div">
            <h6 className="gradient-text-color" style={{ marginTop: "100px" }}>
              LOYALITIES
            </h6>
            <h4>Zech Hill</h4>
            <div style={{ textAlign: "center" }}>
              <a>
                <FaTelegramPlane
                  style={{
                    margin: "0px 0px 0px 10px",
                  }}
                />
              </a>

              <a>
                <FaTelegramPlane
                  style={{
                    margin: "0px 0px 0px 10px",
                  }}
                />
              </a>
            </div>
          </div>
          <img className="img-div" src="/Images/guy.jpg" alt="" />
        </div>
      </div>

      <style global jsx>
        {`
          .main-container {
            background: linear-gradient(to bottom, #676161, #e1dddd);
            margin: 0% 0% 0% 12%;
            width: 220px;
            height: 150px;
            border: 2px solid black;
            border-radius: 10px;
            -webkit-border-radius: 10px;
            margin-right: 51px;
          }
          .img-div {
            width: 80px;
            border-radius: 50%;
            position: relative;
            right: -71px;
            bottom: 150px;
          }
          .box-div {
            color: white;
            padding: 7px 0px 2px 35px;
          }
          .box-div p {
            font-size: 10px;
            margin: 0px 0px -5px 0px;
          }
          .box-div h5 {
            font-size: 16px;
            font-weight: 500;
            color: #ef47a2;
          }
          .box-div b {
            font-size: 14px;
          }
          .box-div h6 {
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
}

export default Screen13Box;
