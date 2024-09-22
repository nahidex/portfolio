import s from "@/components/About/style.module.scss";

const About = () => {
  return (
    <section className={s.hnAbout}>
      <div className={s.hnAboutWrapper}>
        <div className={s.hnAboutHeader}>[ About me - ]</div>
      </div>
      <div className={s.hnAboutDescriptionWrapper}>
        <button>About Me</button>
        <div className={s.hnAboutDescription}>
          <h1>
            I am a Human Interface Designer and Developer, driven by a passion
            for crafting pixel-perfect, minimal, and user-friendly interfaces.
          </h1>
          <p>
            My diverse journey began in Dhaka, where I mastered English, Bangla,
            and excelled in math and sciences. With a Post Grad in Electrical
            and Electronic Engineering, I transitioned to design in 2014. My
            unique blend of technical expertise and design skills enables me to
            create seamless digital experiences. I specialize in human-centered
            design, UX problem solving, and UI design, leveraging front-end
            technologies. Collaborating with professionals, I've crafted
            impactful digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
