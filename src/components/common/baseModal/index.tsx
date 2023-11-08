import React, { useEffect, useRef } from "react";
import * as S from "./styles";
import useClickOutside from "../../../hooks/useClickOutside";

export type Side = "left" | "right" | "top" | "bottom" | "center";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  side?: Side;
}

const getFocusableElements = (target: Element) => {
  const focusableElements =
    "a[href], button:not([disabled]), textarea, input, select";
  return target.querySelectorAll(focusableElements);
};

const BaseModal: React.FC<ModalProps> = ({
  children,
  onClose,
  side = "center",
  ...props
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useClickOutside(modalRef, () => onClose());

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      // only execute if tab is pressed
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return;
      if (!modalRef.current) return;
      // here we query all focusable elements, customize as your own need
      const focusableModalElements = getFocusableElements(modalRef.current);
      const firstElement = focusableModalElements[0] as HTMLElement;
      const lastElement = focusableModalElements[
        focusableModalElements.length - 1
      ] as HTMLElement;

      // if going forward by pressing tab and lastElement is active shift focus to first focusable element
      if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        return e.preventDefault();
      }

      // if going backward by pressing tab and firstElement is active shift focus to last focusable element
      if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [onClose]);

  useEffect(() => {
    const focusedElementBeforeModal = document.activeElement as HTMLElement;
    if (modalRef.current) {
      const focusableModalElements = getFocusableElements(modalRef.current);
      const firstElement = focusableModalElements[0] as HTMLElement;
      firstElement.focus();
    }
    previousFocusRef.current = focusedElementBeforeModal;

    return () => {
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, []);

  return (
    <div>
      <S.ModalBackground />
      <S.ModalWrapper
        side={side}
        {...props}
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </S.ModalWrapper>
    </div>
  );
};

export default BaseModal;
