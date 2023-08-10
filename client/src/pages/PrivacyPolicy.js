import { useTitle } from "../Hooks/useTitle";
import { useEffect } from "react";
import { NavigationBar } from "../components/Navigation/NavigationBar";
import { PrivacyPolicySection } from "../components/PrivacyPolicySection/PrivacyPolicySection";
import { Footer } from "../components/Footer/Footer";

export const PrivacyPolicy = () => {
    useTitle("Privacy and Policy | Bay-Ler View Hotel");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <NavigationBar />
      <PrivacyPolicySection />
      <Footer />
    </>
  );
};
