import "../styles/globals.css";
import "../styles/Icons.css";
import "../styles/InfoBox.css";
// import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Layout> */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </>
  );
}

export default MyApp;
