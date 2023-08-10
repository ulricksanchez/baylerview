import { useTitle } from "../Hooks/useTitle";
import { useEffect } from "react";
import { NavigationBar } from "../components/Navigation/NavigationBar";
import { FirstRoomSection } from "../components/RoomSection/FirstRoomSection";
import { SecondRoomSection } from "../components/RoomSection/SecondRoomSections";
import { ThirdRoomSection } from "../components/RoomSection/ThirdRoomSection";
import { NewsletterSmallSection } from "../components/NewsletterSection/NewsletterSmallSection";
import { Footer } from "../components/Footer/Footer";

export const RoomsList = () => {
  useTitle("Rooms | Bay-Ler View Hotel");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <NavigationBar />
      <div className="py-20 bg-gray-100">
        <FirstRoomSection />
        <SecondRoomSection />
        <ThirdRoomSection />
      </div>
      <NewsletterSmallSection />
      <Footer />
    </>
  );
};
