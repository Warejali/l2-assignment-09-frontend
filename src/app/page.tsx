import Footer from "@/components/ui/Footer";
import Services from "@/components/ui/Services";
import Slider from "@/components/ui/Slider";
import PublicHeader from "@/constants/publicHeader";

export default function Home() {
  return <>
    <PublicHeader />
    <Slider />
    <Services />
    <Footer></Footer>
  </>
}
