import Download from "../home/Download";
import Footer from "../home/Footer";
import "./faqs.css";
import Accordion from "./Accordion";

const Faqs = () => {
  return (
    <div className="faqs-tions">
      <div className="faqs">
        <h1>Frequently Asked Questions</h1>

        <Accordion />
      </div>
      <Download />
      <Footer />
    </div>
  );
};

export default Faqs;
