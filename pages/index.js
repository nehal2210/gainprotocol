import Head from "next/head";
import Image from "next/image";
import Coin_s2 from "../components/Coin_s2";
import Header from "../components/Header";
import Screen10 from "../components/Screen10";
import Screen11 from "../components/Screen11";
import Screen12 from "../components/Screen12";
import Screen13 from "../components/Screen13";
import Screen3 from "../components/Screen3";
import Screen4 from "../components/Screen4";
import Screen5 from "../components/Screen5";
import Screen6 from "../components/Screen6";
import Screen7 from "../components/Screen7";
import Screen9 from "../components/Screen9";

// import backgroundVideo from '../public/ab.mp4'
// import WOW from "wow.js";
// WOW.wow.init();
export default function Home() {
  return (
    <div>
      <Head>
        {/* <script
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js"
          integrity="sha512-Rd5Gf5A6chsunOJte+gKWyECMqkG8MgBYD1u80LOOJBfl6ka9CtatRrD4P0P5Q5V/z/ecvOCSYC8tLoWNrCpPg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>

        <script>
          $(document).ready(function ()
          {
            // console.log("testing")
            new WOW().init()
          }
          );
        </script> */}

        <link
          rel="preload"
          href="../Font/euro_technic_extended_regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      {/* <Header /> */}
      {/* screen 2 */}
      {/* <Coin_s2 /> */}
      {/* Screen 3 */}
      {/* <Screen3/>     */}

      {/* Screen 4 */}
      {/* <Screen4 /> */}
      {/* Screen5 */}
      {/* <Screen5 /> */}

      {/* Screen6 */}
      {/* <Screen6 /> */}

      {/* Screen 7 */}
      {/* <Screen7 /> */}

      {/* Screen8 */}
      {/* <Screen8 /> */}

      {/* Screen9 */}
      {/* <Screen9 /> */}

      {/* Screen 10 */}
      <Screen10 />

      {/* Screen 11 */}

      <Screen11 />

      {/* Screen 12 */}
      <Screen12 />
      {/* Screen 13 */}

      {/* <Screen13 /> */}
    </div>
  );
}
