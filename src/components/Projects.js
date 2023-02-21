import React from "react";
import styles from "../constants/style";

function Projects() {
  return (
    <section id="projects" className="md:mx-5 my-7 max-w-4xl">
      <h1 className={`text-title text-3xl ${styles.latoSemi} tracking-wide`}>
        Some things I made
      </h1>
      <p className={`text-white text-sm ${styles.lato} mt-[31px] 2xl:pr-48`}>
        Coming soon!
      </p>
    </section>
  );
}

export default Projects;
