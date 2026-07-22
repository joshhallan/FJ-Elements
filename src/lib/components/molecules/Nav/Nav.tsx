import React, { useState } from "react";
import styles from "./Nav.module.css";

export interface NavLink {
  label: React.ReactNode;
  href: string;
  external?: boolean;
  ariaLabel?: string;
}

export interface NavProps {
  links: NavLink[];

  renderLink: (
    link: NavLink,
    className: string,
    onClick?: () => void,
  ) => React.ReactNode;
}

export const Nav = ({ links, renderLink }: NavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [brandLink, ...navLinks] = links;

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          {brandLink && renderLink(brandLink, styles.logoLink, closeMenu)}
        </div>

        <div className={styles.desktopNav}>
          {navLinks.map((link) => renderLink(link, styles.navLink))}
        </div>

        <button
          className={styles.mobileToggle}
          onClick={toggleMenu}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <div
            className={`${styles.burger} ${
              isMenuOpen ? styles.burgerOpen : ""
            }`}
          >
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`${styles.mobileOverlay} ${
          isMenuOpen ? styles.overlayOpen : ""
        }`}
      >
        {navLinks.map((link) => renderLink(link, styles.navLink, closeMenu))}
      </div>
    </nav>
  );
};
