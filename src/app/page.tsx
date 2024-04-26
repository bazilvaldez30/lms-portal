import Landing from "../components/Home/landing";
import AboutUs from "../components/Home/about-us";
import AdditionalInfo from "../components/Home/additional-Info";
import Careers from "../components/Home/careers";
import Community from "../components/Home/community";
import Inquiry from "../components/Home/inquiry";
import Programs from "../components/Home/programs";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Landing />
      <AboutUs />
      <AdditionalInfo />
      <Programs />
      <Inquiry />
      <Community />
      <Careers />
      <Footer />
    </main>
  );
}
