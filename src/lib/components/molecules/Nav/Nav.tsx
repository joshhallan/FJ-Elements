import React, { useState } from "react";
import { Container } from "../../layout/Grid/Container";
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <Container className={styles.fullHeight}>
        <div className={styles.inner}>
          {/* Brand/Logo Section */}
          <div className={styles.logo}>
            {renderLink(
              { label: "", href: brandHref },
              styles.logoLink,
              closeMenu,
            )}
            {brand}
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {links.map((link) => renderLink(link, styles.navLink))}
          </div>

          {/* Mobile Toggle Button */}
          <button
            className={styles.mobileToggle}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div
              className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileOverlay} ${isMenuOpen ? styles.overlayOpen : ""}`}
      >
        {links.map((link) => renderLink(link, styles.navLink, closeMenu))}
      </div>
    </nav>
  );
};
