import { useTitle } from "../Hooks/useTitle";
import { useEffect } from "react";
import { NavigationBar } from '../components/Navigation/NavigationBar';
import { AboutSection } from '../components/AboutSection/AboutSection';
import { Footer } from '../components/Footer/Footer';

export const AboutUs = () => {
  useTitle("About Us | Bay-Ler View Hotel");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
    <NavigationBar />
    <AboutSection />
    <Footer />
    </>
  )
}
