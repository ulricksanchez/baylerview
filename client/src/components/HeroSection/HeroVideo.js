import "./HeroSection.css";
import ReactPlayer from "react-player";
import heroVideo from "../../assets/hero-video/video.mp4";

export const HeroVideo = () => {
  return (
    <section className="herovideo pt-20">
        <ReactPlayer
          url={heroVideo}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
    </section>
  );
};
