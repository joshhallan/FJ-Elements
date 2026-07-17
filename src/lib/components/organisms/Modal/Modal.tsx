import React, { useEffect, useRef } from "react";
import { Typography } from "../../typography";
import styles from "./Modal.module.css";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const handleCancel = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onClose();
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
    >
      <div
        className={styles.container}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={styles.header}>
          <Typography as="h3" className={styles.title}>
            {title}
          </Typography>

          <button
            onClick={onClose}
            className={styles.closeBtn}
            aria-label="Close modal"
          >
            &times;
          </button>
        </header>

        <div className={styles.body}>{children}</div>

        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </dialog>
  );
};

Modal.displayName = "Modal";
