import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Intro() {
  return (
    <section className="flex flex-wrap flex-col py-7 animate-pop animation-delay-200">
      <h1 className="font-lato font-bold text-5xl text-title">
        I'm Sellyna Lee
      </h1>
      <p className="font-lato text-lg text-highlight mt-[10px]">
        Front End Developer / Junior Developer
      </p>
      <p className={`font-lato text-sm text-white mt-[15px] 2xl:pr-48 md:pr-5`}>
        I am a junior developer based in the beautiful city of Auckland, New
        Zealand. I like to build code, bring interface designs to life and
        learning new technologies in the digital space.
      </p>

      <div className="mt-6">
        <a href="https://www.linkedin.com/in/sellyna-lee/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="xl"
            inverse
            className="pr-[20px]"
          />
        </a>
        <a href="https://github.com/SewinaCode">
          <FontAwesomeIcon
            icon={faGithub}
            size="xl"
            inverse
            className="pl-[20px]"
          />
        </a>
      </div>
    </section>
  );
}

export default Intro;
