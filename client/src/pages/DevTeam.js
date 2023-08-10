
import { useTitle } from "../Hooks/useTitle";
import { useEffect } from "react";
import { NavigationBar } from "../components/Navigation/NavigationBar";
import { DevTeamSection } from "../components/DevTeamSection/DevTeamSection";
import { Footer } from "../components/Footer/Footer";

export const DevTeam = () => {
    useTitle("Development Team | Bay-Ler View Hotel");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
    <NavigationBar />
    <DevTeamSection />
    <Footer />
    
    </>
  )
}
