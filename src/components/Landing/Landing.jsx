"use client";
import Image from "next/image";
import Link from "next/link";
import nahid from "../../../public/habibullah-nahid.png";
import s from "@/components/Landing/style.module.scss";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { formatInTimeZone } from "date-fns-tz";

function Landing() {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    const [time, setTime] = useState();

    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        const timeOut = setInterval(() => {
            let date = new Date(Date.now());
            date = formatInTimeZone(date, "Asia/Dhaka", "hh:mm:ss aaaaa'm'");
            setTime(date);
        }, 1000);

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: (e) => (direction = e.direction * -1),
            },
            x: "-500px",
        });
        requestAnimationFrame(animation);

        return () => {
            clearInterval(timeOut);
        };
    }, []);

    const animation = () => {
        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });

        xPercent += 0.05 * direction;
        requestAnimationFrame(animation);
    };
    return (
        <div className={s.hnLanding}>
            <header className={s.hnHeder}>
                <div className={s.hnName}>
                    <Link href={"/"}>h.nahid&#8482;</Link>
                </div>
                <nav className={s.hnNav}>
                    <Link href={"/"}>
                        <span>✺</span> Availvable for work
                    </Link>
                    <ul>
                        <li>
                            <Link href={"/"}>Cases</Link>
                        </li>
                        <li>
                            <Link href={"/"}>About</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className={s.hnCta}>
                <div className={s.hnCtaWrappe}>
                    <h1>Turning Bold</h1>
                    <h1>Concepts into</h1>
                    <h1>Digital Masterpieces.</h1>
                </div>
                <div className={s.hnDateTimeLocation}>
                    <div className={s.hnTime}>
                        <span>Local Time</span>
                        <span>{time}</span>
                    </div>
                    <div className={s.hnLocation}>
                        <span>Dhaka, Bangladesh</span>
                        <span>23.8041° N, 90.4152° E</span>
                    </div>
                </div>

                <div className={s.hnUser}>
                    <span>
                        <Image
                            src="/icons/arrow-angle-down.svg"
                            height={24}
                            width={24}
                            alt="Angle Arrow donw"
                        />
                    </span>
                    <Image
                        src={nahid}
                        height={322}
                        width={322}
                        quality={100}
                        alt="Habibullah Nahid"
                    />
                    <h2>Freelacne</h2>
                    <h3>Designer &amp; Developer</h3>
                </div>
            </section>
            <section className={s.hnSiteItems}>
                <div className={s.hnSiteItemsWrapper}>
                    <div className={s.hnSiteItemsLeft}>
                        <Link href="/" className={s.hnLandingDesc}>
                            <Image
                                src="/icons/arrow-right.svg"
                                height={18}
                                width={18}
                                alt="Arrow Right"
                            />
                            <span>Start a Project</span>
                        </Link>
                        <Link href="/" className={s.hnLandingDesc}>
                            <Image
                                src="/icons/arrow-down.svg"
                                height={18}
                                width={18}
                                alt="Arrow Down"
                            />
                            <span>Go to work</span>
                        </Link>
                    </div>

                    <ul className={s.hnBasicBio}>
                        <li>8 years of experience</li>
                        <li>30+ Clients</li>
                        <li>50+ Projects</li>
                    </ul>
                </div>
            </section>
            <section className={s.hnSliderContainer}>
                <div ref={slider} className={s.hnSlider}>
                    <p ref={firstText}>
                        Habibullah Nahid<span>✺</span>Freelance Designer &amp;
                        Developer<span>✺</span>
                    </p>
                    <p ref={secondText}>
                        Habibullah Nahid<span>✺</span>Freelance Designer &amp;
                        Developer<span>✺</span>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Landing;
