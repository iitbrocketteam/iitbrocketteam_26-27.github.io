"use client";

import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
// TODO add social media
import { useState, useEffect } from "react";
// import { ThemeContext } from "./Theme";

// TODO add social media links as well as links to share the website

const links = [
  ["/", "Home"],
  ["/team", "Team"],
  ["/sponsors", "Sponsors"],
  ["/achievements", "Achievements"],
  ["/rockets", "Rockets"],
  ["/contact", "Contact"],
];

// on desktop contact is the outline button on the right, not a tab
const cta_link = "/contact";

export default function Navbar() {
  const pathname = usePathname();
  const current_link = links.find((link) => link[0] === pathname);

  const [dropdown_closed, set_dropdown_closed] = useState(true);

  // on the homepage the navbar sits transparent over the hero photo,
  // and gets its solid background once scrolled past it
  const is_home = pathname === "/";
  const [scrolled, set_scrolled] = useState(false);

  useEffect(() => {
    if (!is_home) return;
    const on_scroll = () => set_scrolled(window.scrollY > 40);
    on_scroll();
    window.addEventListener("scroll", on_scroll, { passive: true });
    return () => window.removeEventListener("scroll", on_scroll);
  }, [is_home]);

  // link may not exist - eg if gonna 404
  if (!current_link) {
    return null;
  }

  const mobile_active = (
    <div
      className={styles.mobile_active}
      onClick={() => {
        set_dropdown_closed(!dropdown_closed);
      }}
    >
      {current_link[1]}

      <FaChevronDown />
    </div>
  );

  const links_content = links.map((link) => (
    <Link
      href={link[0]}
      key={link[0]}
      className={
        styles.subpage_link +
        " " +
        (link[0] === pathname ? styles.active : styles.inactive) +
        (link[0] === cta_link ? " " + styles.mobile_only : "")
      }
      onClick={() => {
        set_dropdown_closed(true);
      }}
    >
      {link[1]}
    </Link>
  ));

  return (
    <nav
      className={
        styles.navbar + (is_home && !scrolled ? " " + styles.transparent : "")
      }
    >
      <Link className={styles.logo_link} href="/">
        <Image
          className={styles.logo}
          src="/rtlogo1.png"
          width={384}
          height={222}
          alt="Logo"
        />
      </Link>

      {mobile_active}
      <div
        className={
          styles.links + (dropdown_closed ? " " + styles.dropdown_closed : "")
        }
      >
        {links_content}
      </div>

      <Link
        href={cta_link}
        className={
          styles.contact + (pathname === cta_link ? " " + styles.active : "")
        }
      >
        Contact →
      </Link>
    </nav>
  );
}
