import BrandingDesign from "@/components/Home/BrandingDesign";
import Custom from "@/components/Home/Custom";
import HeroSection from "@/components/Home/HeroSection";
import Read from "@/components/Home/Read";
import Trusted from "@/components/Home/Trusted";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <HeroSection/>
    <Trusted/>
    <BrandingDesign/>
    <Custom/>
    <Read/>
  </div>
  );
}
