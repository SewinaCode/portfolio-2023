import { skillPoints } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section id="about" className="py-7">
      <div>
        <h1 className="text-title text-3xl font-lato font-semibold tracking-wide">
          A bit about me <span className="tracking-widest">...</span>
        </h1>
        <p
          className={`text-white text-sm font-lato font-normal mt-[31px] 2xl:pr-48`}
        >
          Nice to meet you! I’m Sellyna and my journey to tech started when my
          friend first introduced me to web development after 6 years in the
          workforce. I took a chance and bought my first Udemy course learning
          <span className="text-highlight"> HTML</span>,
          <span className="text-highlight"> CSS </span>and
          <span className="text-highlight"> Javascript</span> and the rest was
          history. <br /> <br /> I successfully completed Mission Ready’s
          <span className="text-highlight"> Full Stack Developer</span> &
          <span className="text-highlight"> Cloud and Devops Developer</span>
          courses before moving on to an internship with Tohu Media. My time
          with Mission Ready helped me discover my strength in Front End
          Development but I am interested in other areas of tech have a strong
          willingness to learn.
        </p>
      </div>
      <div>
        <p className="text-title text-lg font-lato font-semibold mt-[31px] ">
          Here are a few technologies I have been working with:
        </p>
        <ul className={`flex flex-wrap flex-row mt-[29px] max-w-xs`}>
          {skillPoints.map((skill) => (
            <li className="flex flex-row items-center text-white mb-[29px] ml-[19px]">
              <FontAwesomeIcon icon={faCircle} className="text-accent w-3" />
              <p className="ml-[19px]">{skill.skill}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
