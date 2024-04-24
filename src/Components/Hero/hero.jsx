import './hero.css';
import {Button} from "@nextui-org/react";
import heroVid from "../../assets/videos/hero.mp4";
const Hero = () => {

    return (
      <div className="hero text-pretty xl:px-40 lg:px-20 md:px-10 px-5">
        <video src={heroVid} autoPlay loop />
        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold text-center font-josefin-sans pb-2">
          Rethink Your Finances. Take Control with AI.
        </h1>
        <p className="hero-p text-center lg:text-lg text-base pb-4">
          FinsaPro is your AI-powered financial advisor, helping you make
          smarter spending decisions, reach your goals faster, and achieve
          financial freedom.
        </p>
        <Button
          radius="full"
          endContent={<span class="material-symbols-outlined">north_east</span>}
          size="lg"
          className="hero-btn text-lg xl:h-16 lg:h-14 h-12"
          variant="shadow"
        >
          Get Started
        </Button>
        {/* <div className='glow absolute bg-white blur-3xl z-0'></div> */}
      </div>
    );
}

export default Hero;