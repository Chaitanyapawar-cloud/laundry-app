import Image from "next/image";
import HeroBanner from "../components/HeroBanner";
import ServicesSlider from "../components/ServicesSlider";
import WhatsappFloat from "../components/WhatsappFloat";

export default function Home() {
  return (
     <>
      <HeroBanner />

      <section className="max-w-6xl mx-auto py-12 px-4">
        <ServicesSlider />

       
      </section>
      <WhatsappFloat />
    </>
  );
}
