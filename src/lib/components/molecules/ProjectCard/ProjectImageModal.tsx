import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./ProjectCard.module.css";

interface ModalProps {
  project: { title: string; image: string };
  onClose: () => void;
}

export const ProjectImageModal = ({ project, onClose }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        <div className={styles.modalImageContainer}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.modalImg}
          />
        </div>
      </div>
    </div>
  );
};
