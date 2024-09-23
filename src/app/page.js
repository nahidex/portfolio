"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Landing from "@/components/Landing/Landing";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <main>
            <Landing />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                sint facere ratione deleniti dolores sed in, totam nisi possimus
                nemo necessitatibus iure vitae asperiores labore similique,
                incidunt eos obcaecati, quaerat accusantium tempore harum sunt
                soluta aperiam ipsa. Repellat dolorum laboriosam, quisquam quo
                similique commodi impedit! Quo deleniti praesentium fuga debitis
                ducimus enim nulla repellendus est perferendis! Delectus
                repellat voluptas deleniti commodi quidem iure expedita incidunt
                quas illum iste molestiae hic ad laborum, vitae debitis minima
                sequi doloremque? Dolor odit, quibusdam voluptates itaque
                delectus nisi aspernatur nobis repudiandae, aliquid qui neque
                ducimus distinctio quam, tempore incidunt odio eos voluptatum
                nihil magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                sint facere ratione deleniti dolores sed in, totam nisi possimus
                nemo necessitatibus iure vitae asperiores labore similique,
                incidunt eos obcaecati, quaerat accusantium tempore harum sunt
                soluta aperiam ipsa. Repellat dolorum laboriosam, quisquam quo
                similique commodi impedit! Quo deleniti praesentium fuga debitis
                ducimus enim nulla repellendus est perferendis! Delectus
                repellat voluptas deleniti commodi quidem iure expedita incidunt
                quas illum iste molestiae hic ad laborum, vitae debitis minima
                sequi doloremque? Dolor odit, quibusdam voluptates itaque
                delectus nisi aspernatur nobis repudiandae, aliquid qui neque
                ducimus distinctio quam, tempore incidunt odio eos voluptatum
                nihil magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                sint facere ratione deleniti dolores sed in, totam nisi possimus
                nemo necessitatibus iure vitae asperiores labore similique,
                incidunt eos obcaecati, quaerat accusantium tempore harum sunt
                soluta aperiam ipsa. Repellat dolorum laboriosam, quisquam quo
                similique commodi impedit! Quo deleniti praesentium fuga debitis
                ducimus enim nulla repellendus est perferendis! Delectus
                repellat voluptas deleniti commodi quidem iure expedita incidunt
                quas illum iste molestiae hic ad laborum, vitae debitis minima
                sequi doloremque? Dolor odit, quibusdam voluptates itaque
                delectus nisi aspernatur nobis repudiandae, aliquid qui neque
                ducimus distinctio quam, tempore incidunt odio eos voluptatum
                nihil magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                sint facere ratione deleniti dolores sed in, totam nisi possimus
                nemo necessitatibus iure vitae asperiores labore similique,
                incidunt eos obcaecati, quaerat accusantium tempore harum sunt
                soluta aperiam ipsa. Repellat dolorum laboriosam, quisquam quo
                similique commodi impedit! Quo deleniti praesentium fuga debitis
                ducimus enim nulla repellendus est perferendis! Delectus
                repellat voluptas deleniti commodi quidem iure expedita incidunt
                quas illum iste molestiae hic ad laborum, vitae debitis minima
                sequi doloremque? Dolor odit, quibusdam voluptates itaque
                delectus nisi aspernatur nobis repudiandae, aliquid qui neque
                ducimus distinctio quam, tempore incidunt odio eos voluptatum
                nihil magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                sint facere ratione deleniti dolores sed in, totam nisi possimus
                nemo necessitatibus iure vitae asperiores labore similique,
                incidunt eos obcaecati, quaerat accusantium tempore harum sunt
                soluta aperiam ipsa. Repellat dolorum laboriosam, quisquam quo
                similique commodi impedit! Quo deleniti praesentium fuga debitis
                ducimus enim nulla repellendus est perferendis! Delectus
                repellat voluptas deleniti commodi quidem iure expedita incidunt
                quas illum iste molestiae hic ad laborum, vitae debitis minima
                sequi doloremque? Dolor odit, quibusdam voluptates itaque
                delectus nisi aspernatur nobis repudiandae, aliquid qui neque
                ducimus distinctio quam, tempore incidunt odio eos voluptatum
                nihil magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                sint facere ratione deleniti dolores sed in, totam nisi possimus
                nemo necessitatibus iure vitae asperiores labore similique,
                incidunt eos obcaecati, quaerat accusantium tempore harum sunt
                soluta aperiam ipsa. Repellat dolorum laboriosam, quisquam quo
                similique commodi impedit! Quo deleniti praesentium fuga debitis
                ducimus enim nulla repellendus est perferendis! Delectus
                repellat voluptas deleniti commodi quidem iure expedita incidunt
                quas illum iste molestiae hic ad laborum, vitae debitis minima
                sequi doloremque? Dolor odit, quibusdam voluptates itaque
                delectus nisi aspernatur nobis repudiandae, aliquid qui neque
                ducimus distinctio quam, tempore incidunt odio eos voluptatum
                nihil magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                sint facere ratione deleniti dolores sed in, totam nisi possimus
                nemo necessitatibus iure vitae asperiores labore similique,
                incidunt eos obcaecati, quaerat accusantium tempore harum sunt
                soluta aperiam ipsa. Repellat dolorum laboriosam, quisquam quo
                similique commodi impedit! Quo deleniti praesentium fuga debitis
                ducimus enim nulla repellendus est perferendis! Delectus
                repellat voluptas deleniti commodi quidem iure expedita incidunt
                quas illum iste molestiae hic ad laborum, vitae debitis minima
                sequi doloremque? Dolor odit, quibusdam voluptates itaque
                delectus nisi aspernatur nobis repudiandae, aliquid qui neque
                ducimus distinctio quam, tempore incidunt odio eos voluptatum
                nihil magnam!
            </p>
        </main>
    );
}
