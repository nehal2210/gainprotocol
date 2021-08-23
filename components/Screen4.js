function Screen4() {
  return (
    <div>
      <div
        style={{
          color: "white",

          left: "50%",
          //   bottom: "60%",
          float: "right",
          marginRight: "60px",
          marginTop: "60px",
          maxWidth: "40vw",
          position: "absolute",
        }}
      >
        <h3>Transfer Fees</h3>
        <br />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for &apos;lorem ipsum&apos; will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like
        </p>
      </div>

      <div className="video-container  top-0 w-100">
        <video id="video-bg" autoPlay={true} muted loop>
          <source src="../videos/mobile.mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Screen4;
