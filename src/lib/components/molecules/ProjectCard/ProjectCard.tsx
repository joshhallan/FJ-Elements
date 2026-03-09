import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Typography } from "../../typography";
import { ProjectImageModal } from "./ProjectImageModal";
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
  style?: "short" | "long";
  renderLink: (
    link: { href: string },
    className: string,
    children: React.ReactNode,
  ) => React.ReactNode;
}

export const ProjectCard = ({
  project,
  style = "short",
  renderLink,
}: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const displayDescription =
    style === "long" ? project.fullDescription : project.description;

  return (
    <>
      <div
        className={`${styles.card} ${styles[style]}`}
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={project.image}
          alt={project.title}
          className={styles.bgImage}
        />
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
            className={`${styles.description} ${style === "short" ? styles.clamp : ""}`}
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
                { href: project.githubUrl },
                styles.link,
                <>
                  <FaGithub /> Source
                </>,
              )}

            {project.link &&
              renderLink(
                { href: project.link },
                `${styles.link} ${styles.live}`,
                <>
                  <FaExternalLinkAlt /> Live Site
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

      {isModalOpen && (
        <ProjectImageModal
          project={project}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};
