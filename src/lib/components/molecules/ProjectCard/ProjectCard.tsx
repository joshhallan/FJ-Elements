import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Typography } from "../../typography";
import styles from "./ProjectCard.module.css";
import { Badge } from "../../atoms/Badge";

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  tech: string[];
  githubUrl: string;
  link?: string;
  status?: string;
}

export interface ProjectCardProps {
  project: Project;
  variant?: "short" | "long";
  renderLink: (
    link: { href: string; ariaLabel?: string },
    className: string,
    children: React.ReactNode,
  ) => React.ReactNode;
}

export const ProjectCard = ({
  project,
  variant = "short",
  renderLink,
}: ProjectCardProps) => {
  const displayDescription =
    variant === "long" ? project.fullDescription : project.description;

  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <img src={project.image} alt={project.title} className={styles.bgImage} />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.topRow}>
          <Typography as="span" className={styles.category}>
            {project.category}
          </Typography>

          {project.status === "WIP" && (
            <Badge variant="primary" className={styles.wipBadge}>
              WIP
            </Badge>
          )}
        </div>

        <Typography as="h3" className={styles.title}>
          {project.title}
        </Typography>

        <Typography
          as="p"
          className={`${styles.description} ${
            variant === "short" ? styles.clamp : ""
          }`}
        >
          {displayDescription}
        </Typography>

        <div className={styles.techList}>
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>

        <div className={styles.actions} onClick={(e) => e.stopPropagation()}>
          {project.githubUrl &&
            renderLink(
              {
                href: project.githubUrl,
                ariaLabel: `View ${project.title} source code on GitHub`,
              },
              styles.link,
              <>
                <FaGithub aria-hidden="true" />
                Source
              </>,
            )}

          {project.link &&
            renderLink(
              {
                href: project.link,
                ariaLabel: `Visit ${project.title} live site`,
              },
              `${styles.link} ${styles.live}`,
              <>
                <FaExternalLinkAlt aria-hidden="true" />
                Live Site
              </>,
            )}

          {!project.githubUrl && !project.link && (
            <Typography as="span" className={styles.link}>
              Internal Project
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};
