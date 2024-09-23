import s from "@/components/Works/style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

const Works = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-260vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1150 top",
          scrub: 0.6,
          pin: true,
          // markers: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className={s.hnSelectedWorks}>
      <div className={s.hnSelectedWorksHeading}>
        <div className={s.hnSelectedWorksWrap}>
          <h1>
            Selected Works <span>(5)</span>
          </h1>
          <p>Embracing iteration over perfection.</p>
          <p>Agility over process.</p>
          <p>People over users.</p>
        </div>
      </div>
      <div ref={triggerRef} className={s.hnSelectedWorksItems}>
        <ul ref={sectionRef}>
          <li>
            <span className={s.hnNumber}>01.</span>
            <div className={s.middileItem}>
              <h6>Dong Fong</h6>
              <h4>Systeminzg Growth THrougth Design</h4>
              <img src="portfolio-img-1.png" alt="" />
            </div>
            <div className={s.lastItem}>
              <div className={s.itemMeta}>
                <h6>2024</h6>
                <a href="">View Project</a>
              </div>
              <img src="portfolio-img-2.png" alt="" />
            </div>
          </li>
          <li>
            <span className={s.hnNumber}>02.</span>
            <div className={s.middileItem}>
              <h6>Dong Fong</h6>
              <h4>Systeminzg Growth THrougth Design</h4>
              <img src="portfolio-img-1.png" alt="" />
            </div>
            <div className={s.lastItem}>
              <div className={s.itemMeta}>
                <h6>2024</h6>
                <a href="">View Project</a>
              </div>
              <img src="portfolio-img-2.png" alt="" />
            </div>
          </li>
          <li>
            <span className={s.hnNumber}>03.</span>
            <div className={s.middileItem}>
              <h6>Dong Fong</h6>
              <h4>Systeminzg Growth THrougth Design</h4>
              <img src="portfolio-img-1.png" alt="" />
            </div>
            <div className={s.lastItem}>
              <div className={s.itemMeta}>
                <h6>2024</h6>
                <a href="">View Project</a>
              </div>
              <img src="portfolio-img-2.png" alt="" />
            </div>
          </li>
          <li>
            <span className={s.hnNumber}>04.</span>
            <div className={s.middileItem}>
              <h6>Dong Fong</h6>
              <h4>Systeminzg Growth THrougth Design</h4>
              <img src="portfolio-img-1.png" alt="" />
            </div>
            <div className={s.lastItem}>
              <div className={s.itemMeta}>
                <h6>2024</h6>
                <a href="">View Project</a>
              </div>
              <img src="portfolio-img-2.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Works;
