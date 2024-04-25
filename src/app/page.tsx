import Landing from "../components/landing";
import AboutUs from "../components/about-us";
import AdditionalInfo from "../components/additional-Info";
import Careers from "../components/careers";
import Community from "../components/community";
import Inquiry from "../components/inquiry";
import Programs from "../components/programs";

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
    </main>
  );
}
