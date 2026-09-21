import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Founder from "./pages/Founder";
import Careers from "./pages/Careers";
import OngoingProjects from "./pages/OngoingProjects";
import CompletedProjects from "./pages/CompletedProjects";
import AyanurEnclave from "./pages/AyanurEnclave";
import DharithriGreens from "./pages/DharithriGreens";
import SylvanWoods from "./pages/SylvanWoods";
import UniconSugarland from "./pages/UniconSugarland";
import UpcomingProjects from "./pages/UpcomingProjects";
import Gallery from "./pages/Gallery";
import VideoGallery from "./pages/VideoGallery";
import OurPresence from "./pages/OurPresence";
import NewsEvents from "./pages/NewsEvents";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="founder" element={<Founder />} />
          <Route path="careers" element={<Careers />} />
          <Route path="completed-projects" element={<CompletedProjects />} />
          <Route path="completed-projects/ayanur-enclave" element={<AyanurEnclave />} />
          <Route path="completed-projects/dharithri-greens" element={<DharithriGreens />} />
          <Route path="ongoing-projects" element={<OngoingProjects />} />
          <Route path="ongoing-projects/sylvan-woods" element={<SylvanWoods />} />
          <Route path="ongoing-projects/unicon-sugarland" element={<UniconSugarland />} />
          <Route path="services" element={<OngoingProjects />} />
          <Route path="upcoming-projects" element={<UpcomingProjects />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="video-gallery" element={<VideoGallery />} />
          <Route path="our-presence" element={<OurPresence />} />
          <Route path="news-events" element={<NewsEvents />} />
          {/* <Route path="blog" element={<Blog />} /> */}
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
