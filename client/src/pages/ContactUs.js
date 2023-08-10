import { useTitle } from "../Hooks/useTitle";
import { useEffect } from "react";
import { NavigationBar } from "../components/Navigation/NavigationBar";
import { ContactSection } from "../components/ContactSection/ContactSection";
import { Footer } from "../components/Footer/Footer";

export const ContactUs = () => {
  useTitle("Contact Us | Bay-Ler View Hotel");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <NavigationBar />
      <ContactSection />
      <Footer />
    </>
  );
};
