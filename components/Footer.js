import Image from "next/image";
import { FaTelegramPlane, AiOutlineTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="container" style={{ color: "white", position: "relative" }}>
      style={{ position: "absolute", top: "918px", marginLeft: "10%" }}
      <div className="row">
        <div className="col-4 ">
          {" "}
          <a href="#">
            <Image src="/Images/logo.png" width={"200px"} height={"30px"} />
          </a>
          <p>
            ashdhas ojsdoas jasd jdasd pkasd ojasd apjdas asdas ugsad ihasdasi
            ihsda iasd iasd ihasd iasd sdaouas aosdaso asdpias ihsad ihasd
            uasias uasda
          </p>
        </div>
        <div style={{ position: " absolute", display: "flex", left: "707px" }}>
          <div className="col-1">
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
          </div>
          <div className="col-1">
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
          </div>
          <div className="col-1">
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
          </div>
          <div className="col-1">
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <a>
              <p>abcd</p>
            </a>
            <div
              style={{
                marginTop: "56px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <a>
                <FaTelegramPlane />
              </a>

              <a>
                <FaTelegramPlane />
              </a>

              <a>
                <FaTelegramPlane />
              </a>

              <a>
                <FaTelegramPlane />
              </a>
              <a>
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
