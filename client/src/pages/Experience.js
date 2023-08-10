import { useTitle } from "../Hooks/useTitle";
import { useEffect } from "react";
import { Footer } from "../components/Footer/Footer";
import { NavigationBar } from "../components/Navigation/NavigationBar";
import { Testimonials} from "../components/TestimonialSection/Testimonials";

export const Experience = () => {
  useTitle("Experiences | Bay-Ler View Hotel");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
    <NavigationBar />
    <div className="py-20 bg-gray-100">
    <Testimonials />
    </div>
    <Footer />
    </>
  )
}
