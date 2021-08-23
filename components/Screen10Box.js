function Screen10Box() {
  return (
    <div className="col-sm-3" style={{ color: "white" }}>
      <div className="row align-items-cente">
        <div className="col-sm-3" style={{alignSelf: "center"}}>
            <div style={{width: "36px"}}>

          <img className="w-100"  src="/Images/sc10cir1.png" />
            </div>
        </div>
        <div className="col-sm-9 ml-4">
          <div className="row">
            <div className="col">
              <p className="m-0" style={{fontSize:"13px"}}>TWITTER FOLLOWERS</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2 style={{fontWeight:"700"}}>62,00</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <button
            style={{
              backgroundColor: "white",
              color: "purple",
              padding: "20px",
              borderRadius: "30px",
              textAlign: "center",
              width: "100%",
            }}
          >
            <b>FOLLOW US</b>
          </button>
        </div>
      </div>

      {/* <div style={{ color: "white", marginLeft: "10%" }}>
        <p style={{ marginLeft: "5%" }}>TWITTER FOLLOWERS</p>
        <div style={{ display: "block-inlie" }}>
          <img src="/Images/sc10cir1.png" />
          <h2>62,00</h2>
        </div>
        <button
          style={{
            backgroundColor: "white",
            color: "purple",
            padding: "10px",
            borderRadius: "20px",
            textAlign: "center",
            width: "15%",
            height: "25%",
          }}
        >
          <b>FOLLOW US</b>
        </button>
      </div> */}
    </div>
  );
}

export default Screen10Box;
