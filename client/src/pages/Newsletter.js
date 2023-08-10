import { useTitle } from "../Hooks/useTitle";
import { useEffect } from "react";
import { NavigationBar } from "../components/Navigation/NavigationBar";
import { NewsletterSection } from "../components/NewsletterSection/NewsletterSection";
import { Footer } from "../components/Footer/Footer";

export const Newsletter = () => {
    useTitle("Newsletter | Bay-Ler View Hotel");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
    <NavigationBar />
    <NewsletterSection />
    <Footer />
    </>
  )
}
