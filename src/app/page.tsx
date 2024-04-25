import Landing from "@/components/home/landing";
import AboutUs from "@/components/home/about-us";
import AdditionalInfo from "@/components/home/additional-Info";
import Careers from "@/components/home/careers";
import Community from "@/components/home/community";
import Inquiry from "@/components/home/inquiry";
import Programs from "@/components/home/programs";

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
