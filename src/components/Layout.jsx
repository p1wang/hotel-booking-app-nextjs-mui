import { Container, Divider } from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
        <Divider />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
