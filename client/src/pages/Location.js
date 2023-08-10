import { useTitle } from "../Hooks/useTitle";
import { useEffect } from "react";
import { NavigationBar } from "../components/Navigation/NavigationBar";
import { GetHere } from "../components/GetHere/GetHere";
import { Footer } from "../components/Footer/Footer";

export const Location = () => {
  useTitle("Get Here | Bay-Ler View Hotel");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <NavigationBar />
      <GetHere />
      <Footer />
    </>
  );
};
