import MoneyBox from "./MoneyBox";
import Image from "next/image";
function Coin_s2() {
  const data = [
    { title: "HOLDERS", value: "789,738" },
    { title: "PRICE", value: "$0.00000678" },
    { title: "LIQUIDITY", value: "$250,063.67" },
    { title: "MARKET CAP", value: "$763,738,843.87" },
    { title: "TOTAL SUPPLY", value: "$1,0000,0000,0000,0000" },
    { title: "CIRCULATING SUPPLY", value: "918,0000,0000,0000" },
    { title: "RESERVED SUPPLY", value: "82,0000,0000,0000" },
    { title: "COLLECTION FEES", value: "$173,637.32" },
    { title: "DISTRIBUTION", value: "$53,093.88" },
    { title: "SWEEP TAXES", value: "$53,093.88" },
    { title: "CHARITY", value: "$9,638.66" },
  ];
  return (
    <div className="position-relative negative-margin">
      <div className="row">
        <div className="col"></div>
      </div>
      <div className="w-100 position-absolute">
        <img
          className="mx-auto d-block"
          style={{ marginTop: "50px" }}
          src="/Images/logoscr2.png"
        />
      </div>
      <div className="video-container  top-0 w-100">
        <video id="video-bg" autoPlay={true} muted loop>
          <source src="../videos/coin.mp4"></source>
        </video>
      </div>

      <div
        className="position-absolute"
        style={{
          top: "50%",
          left: "40%",
          float: "right",
          marginRight: "60px",
          maxWidth: "60vw",
        }}
      >
        {data.map((box, i) => {
          return <MoneyBox key={i} title={box.title} value={box.value} />;
        })}
      </div>

      <h3 className="position-absolute" style={{ color: "green" }}>
        <b>Stop the Burn.</b> Increase the <b>value</b>
      </h3>
    </div>
  );
}

export default Coin_s2;
