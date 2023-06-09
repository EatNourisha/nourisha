import { BrowserRouter, Route, Routes } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import NavBar from "./NavBar"
import Home from "./pages/home/Home"
import WhyNourisha from "./pages/why/WhyNourisha"
import Pricing from "./pages/pricing/Pricing"
import ContactUs from "./pages/contact/ContactUs"
import Faqs from "./pages/faqs/Faqs"
import TermsOfService from "./pages/terms/TermsOfService"
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy"
import WeAreHiring from "./pages/hiring/WeAreHiring"

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="why-nourisha" element={<WhyNourisha />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="we-are-hiring" element={<WeAreHiring />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
