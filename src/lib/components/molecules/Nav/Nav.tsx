import React, { useState } from "react";
import styles from "./Nav.module.css";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavProps {
  links: NavLink[];
  brand?: React.ReactNode;
  brandHref?: string;

  renderLink: (
    link: NavLink,
    className: string,
    onClick?: () => void,
  ) => React.ReactNode;
}

export const Nav = ({
  links,
  renderLink,
  brand,
  brandHref = "/",
}: NavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          {renderLink(
            {
              label: "",
              href: brandHref,
            },
            styles.logoLink,
            closeMenu,
          )}

          {brand}
        </div>

        <div className={styles.desktopNav}>
          {links.map((link) => renderLink(link, styles.navLink))}
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
        {links.map((link) => renderLink(link, styles.navLink, closeMenu))}
      </div>
    </nav>
  );
};
