import Hero from "../components/Hero";
import {DashboardExample} from "../components/DashboardExample";
import VoiceCalls from "../components/Voicecalls";
import Integrations from "../components/Integrations";
import Testimonials from "../components/Testimonials";
import Support from "../components/Support";
import DeepDive from "../components/DeepDive";
import CTA from "../components/Cta";
import FAQ from "../components/Faq";


export const HomeServices = () => {
  return (
    <div>
      <Hero />
      <DashboardExample />
      <VoiceCalls />
      <Integrations />
      <Testimonials />
      <Support />
      <DeepDive />
      <CTA />
      <FAQ />
    </div>
  );
};
