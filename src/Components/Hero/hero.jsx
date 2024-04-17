import './hero.css';
import {Button,Image} from "@nextui-org/react";
import arrow from '../../assets/arrow.png';
const Hero = () => {

    return (
      <div className="hero text-pretty xl:px-40 lg:px-20 md:px-10 px-5">
        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold text-center font-josefin-sans pb-2">
          Rethink Your Finances. Take Control with AI.
        </h1>
        <p className="text-center lg:text-lg text-base pb-4">
          FinsaPro is your AI-powered financial advisor, helping you make
          smarter spending decisions, reach your goals faster, and achieve
          financial freedom.
        </p>
        <Button
          radius="full"
          endContent={<span class="material-symbols-outlined">north_east</span>}
          size="lg"
          className="hero-btn text-lg"
          variant="shadow"
        >
          Get Started
        </Button>
      </div>
    );
}

export default Hero;