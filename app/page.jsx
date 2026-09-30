"use client";

import styles from "./page.module.css";

import Link from "next/link";

import { Typewriter } from "react-simple-typewriter";

const stats = [
  { value: "30+", label: "Members" },
  { value: "10,000m", label: "IREC Target Altitude" },
  { value: "34", suffix: "/150+", label: "Global · SA Cup 2024" },
  { value: "#1", label: "National · SA Cup 2023", accent: true },
];

const subsystems = [
  {
    name: "Avionics",
    text: "Design, development and manufacturing of the electronics systems inside the rocket and supporting equipment.",
  },
  {
    name: "Propulsion",
    text: "Research, analyze, and characterize new propellants that can be utilized to achieve better performance for the rocket. Developing new alternatives for propellant manufacturing for better scalability and reliability.",
  },
  {
    name: "Airframe",
    text: "Develop and manufacture the rocket’s airframe and aerodynamic surfaces for stability, strength, and optimal flight performance.",
  },
  {
    name: "Payload",
    text: "Design of payloads, its mechanical movements and supporting hardware to gather key data for the rocket.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        {/* sized like object-fit: cover so the target bracket stays on the rocket */}
        <div
          className={styles.hero_image}
          role="img"
          aria-label="Onboard camera: parachute ejection over the desert"
        >
          <div className={styles.target} aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={styles.hero_fade} />
        <div className={styles.scanlines} />

        <div className={styles.rec} aria-hidden="true">
          <div>
            <span className={styles.rec_dot} />
            REC · ONBOARD CAM
          </div>
          <div>IITB ROCKET TEAM</div>
        </div>

        <div className={styles.headline}>
          <h1>
            <span className={styles.eyebrow}>Welcome to the</span>
            <span className={styles.title}>
              IIT Bombay
              <br />
              Rocket Team
            </span>
          </h1>

          <div className={styles.tagline_row}>
            <p className={styles.tagline}>
              <Typewriter
                words={["Achieving New Frontiers in High Powered Rocketry"]}
                loop={1}
                typeSpeed={30}
                cursor={false}
              />
              <span className={styles.cursor} aria-hidden="true" />
            </p>

            <Link href="/contact" className={styles.cta}>
              Contact Us →
            </Link>
          </div>
        </div>
      </header>

      <section className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <div
              className={
                styles.stat_value + (stat.accent ? " " + styles.accent : "")
              }
            >
              {stat.value}
              {stat.suffix && (
                <span className={styles.stat_suffix}>{stat.suffix}</span>
              )}
            </div>
            <div className={styles.stat_label}>{stat.label}</div>
          </div>
        ))}
      </section>

      <section className={styles.who}>
        <div className={styles.label}>01 / Who are we?</div>
        <div>
          <p className={styles.lead}>
            Our team comprises 30+ members, united by a shared vision for
            advancing rocketry and the space science community in India.
          </p>
          <p className={styles.body}>
            We are guided by experienced faculty from ISRO and IIT Bombay, along
            with a TRA Level-3 certified international mentor who will be our
            Flyer of Record for the IREC competition.
          </p>
        </div>
      </section>

      <section className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.label}>02 / Competitions</div>
          <p className={styles.intro}>
            We are proud to compete on two prestigious platforms:
          </p>
          <div className={styles.entries}>
            <div className={styles.entry}>
              <div className={styles.entry_key}>IREC</div>
              <p>
                At the Intercollegiate Rocket Engineering Competition (IREC), we
                showcase advanced engineering by launching rockets to altitudes
                of 10,000m.
              </p>
            </div>
            <div className={styles.entry}>
              <div className={styles.entry_key}>INSPACE</div>
              <p>
                The INSPACE competition, which highlights our expertise in
                low-altitude rocketry with deployable payloads.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.label}>03 / Achievements</div>
          <p className={styles.intro}>
            We have consistently excelled at the prestigious Spaceport America
            Cup, the world&apos;s largest intercollegiate rocketry competition.
          </p>
          <div className={styles.entries}>
            <div className={styles.entry}>
              <div className={styles.entry_key}>2024</div>
              <p>We ranked 34th among 150+ global teams at SA Cup 2024.</p>
            </div>
            <div className={styles.entry}>
              <div className={styles.entry_key + " " + styles.accent}>2023</div>
              <p>
                We secured the <strong>National First Position</strong> at SA
                Cup 2023, solidifying our place as India&apos;s top collegiate
                rocketry team.
              </p>
            </div>
          </div>
          <Link href="/achievements" className={styles.more}>
            See all our achievements →
          </Link>
        </div>
      </section>

      {/* sections below aren't in the design handoff; same system, existing copy */}

      <section className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.label}>04 / RnD in Fuel</div>
          {/* TODO we have progressed beyond this. add hybird motor info */}
          <p className={styles.intro}>
            We have successfully developed and designed a solid rocket fuel
            composed of sorbitol and potassium nitrate (KNO₃). This formulation,
            known as KNSB (potassium nitrate-sorbitol), offers high reliability,
            affordability, and safety in amateur and student rocketry.
          </p>
        </div>
        <div className={styles.column}>
          <div className={styles.label}>05 / Vision</div>
          <p className={styles.intro}>
            Our team is dedicated to elevate Indian amateur rocketry through
            groundbreaking advancements. Beyond launching rockets, we aim to
            cultivate technical skills and promote STEM education at all levels.
          </p>
        </div>
      </section>

      <section className={styles.columns}>
        {/* FIXME add Ahiliya and Akarsh images */}
        <div className={styles.column}>
          <div className={styles.label}>06 / Current Rockets</div>
          <div className={styles.rocket_name}>Ahiliya</div>
          <p className={styles.intro}>
            Ahiliya marks our third iteration in the 10k rocket series for the
            prestigious IREC competition. This year, we have achieved a
            significant milestone by developing our proprietary solid rocket
            fuel and integrating a deployable payload, showcasing our
            advancements in propulsion technology and payload deployment
            systems.
          </p>
        </div>
        <div className={styles.column}>
          <div className={styles.label + " " + styles.label_spacer}>&nbsp;</div>
          <div className={styles.rocket_name}>Akarsh</div>
          <p className={styles.intro}>
            Akarsh is our inaugural project for the INSPACE competition,
            designed to achieve an apogee of 1,000 meters. This rocket features
            a deployable payload, demonstrating our expertise in precision
            engineering and innovation in low-altitude rocketry for scientific
            and technological applications.
          </p>
        </div>
      </section>

      <section className={styles.subsystems}>
        <div className={styles.label}>07 / Subsystems</div>
        <div className={styles.subsystem_grid}>
          {subsystems.map((subsystem) => (
            <div key={subsystem.name} className={styles.subsystem}>
              <div className={styles.entry_key}>{subsystem.name}</div>
              <p>{subsystem.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
