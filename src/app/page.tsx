import AboutUs from "../components/Home/about-us";
import AdditionalInfo from "../components/Home/additional-Info";
import Careers from "../components/Home/careers";
import Community from "../components/Home/community";
import Inquiry from "../components/Home/inquiry";
import Landing from "../components/Home/landing";
import Programs from "../components/Home/programs";

export default function Home() {
  return (
    <>
      <Landing />
      <AboutUs />
      <AdditionalInfo />
      <Programs />
      <Inquiry />
      <Community />
      <Careers />
    </>
  );
}
