import Icons from "./Icons";
import InfoBox from "./InfoBox";
function Header() {
  return (
    <section className="section1">
      <div className="header__wrapper">
        <header>
          <nav className="position-absolute w-100 navbar bg-transparent navbar-expand-lg">
            <a className="navbar-brand" href="#">
              <img src="../Images/logo.png" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-auto" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <a className="nav-link navbar_anchor" href="#">
                    White Paper
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbar_anchor" href="#">
                    Protocol
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbar_anchor" href="#">
                    Fees
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbar_anchor " href="#">
                    Audit
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbar_anchor " href="#">
                    Sweepstakes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbar_anchor " href="#">
                    Swap
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbar_anchor " href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbar_anchor " href="#">
                    BUY NOW
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="header">
            {/* <nav className="navigation">
              
              <div className="navbar-right">
                <a href="#">White Paper</a>
                <a href="#">Protocol</a>
                <a href="#">Fees</a>
                <a href="#">Audit</a>
                <a href="#">Sweepstakes</a>
                <a href="#">Swap</a>
                <a href="#">Features</a>
                <a href="#">Toro Rounds</a>
                <a href="#">BUY NOW</a>
              </div>
            </nav> */}

            <div className="video-container">
              <video id="video-bg" autoPlay={true} muted loop>
                <source src="../videos/ab.mp4"></source>
              </video>
            </div>
          </div>
        </header>

        <div className="header_icons">
          <Icons />
        </div>
        <div>
          <InfoBox />
        </div>
      </div>
      <div style={{ position: "absolute", top: "742px", left: "315px" }}>
        <p className="gradient-text-color" style={{ textAlign: "center" }}>
          GAIN PROTOCOL IS RUG PULL SAFE. SECURITY AND EFFICIENCY ARE TOP
          PRIORITY.
        </p>
        <p className="gradient-text-color" style={{ textAlign: "center" }}>
          AUDITED BY TOP INDUSTRY LEADING SECURITY AGENCIES.
        </p>
      </div>
    </section>
  );
}

export default Header;
