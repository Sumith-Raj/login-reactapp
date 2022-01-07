import "./HomePage.css";
import { Navbar } from "../Components/Navbar";
import { Images } from "../Components/Images";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <main>
      <Navbar />

      <article>
        <h4>Hi {localStorage.getItem("u$ername")}, Welcome to Gallery</h4>
      </article>
      <article>
        <Images />
      </article>
      <footer>
        <small style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/about" style={{ marginRight: "10px" }}>
            About{" "}
          </Link>
          <Link to="/contact"> Contact</Link>
        </small>
        <br />
      </footer>
    </main>
  );
};
