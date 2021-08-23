function MoneyBox({ title, value }) {
  // const isServer = typeof window === "undefined";
  // const WOW = !isServer ? require("wow.js") : null;

  // window.wow = new WOW.WOW({
  //   live: false,
  // });

  // window.wow.init();

  return (
    <div
      data-wow-delay="0.5s"
      className="animate__animated animate__backInRight  animate__delay-1s"
      style={{
        marginRight: "13px",
        marginTop: "15px",

        float: "left",
        backgroundImage: "linear-gradient(to right, #16151f , #e3e3e36b)",
        width: "min-content;",
        color: "white",
        borderRadius: "10px",
        padding: "0 30px 0  17px ",
      }}
    >
      <div>
        <p style={{ margin: "2px", fontSize: "10px" }}>{title}</p>
      </div>
      <div>
        <p style={{ margin: "2px" }}>{value}</p>
      </div>
    </div>
  );
}

export default MoneyBox;
