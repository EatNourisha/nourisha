import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";
import ScrollToTop from "./ScrollToTop";
import NavBar from "./NavBar";
import Home from "./pages/home/Home";
import WhyNourisha from "./pages/why/WhyNourisha";
import Pricing from "./pages/pricing/Pricing";
import ContactUs from "./pages/contact/ContactUs";
import Faqs from "./pages/faqs/Faqs";
import TermsOfService from "./pages/terms/TermsOfService";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import WeAreHiring from "./pages/hiring/WeAreHiring";
import { HelmetProvider } from "react-helmet-async";
import Affiliate from "./pages/affiliate/Affiliate";
import PartyPlan from "./pages/partyPlan/PartyPlan";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HelmetProvider>
      {window.location.pathname !== "/dashboard/*" && <NavBar />}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="why-nourisha" element={<WhyNourisha />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="we-are-hiring" element={<WeAreHiring />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="affiliate" element={<Affiliate />} />
            <Route path="party-plan" element={<PartyPlan />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard/*" element={<Dashboard />} />
            </Route>
          </Routes>
        </main>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
