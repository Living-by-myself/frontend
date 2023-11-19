import { MODAL_SIDES } from "@/constants/modal.constants";
import { ModalSides } from "@/types/types";
import { motion } from "framer-motion";
import styled from "styled-components";

type ModalWrapperProps = {
  side: ModalSides;
};

export const ModalWrapper = styled(motion.div)<ModalWrapperProps>`
  position: fixed;
  ${({ side }) => {
    switch (side) {
      case MODAL_SIDES.LEFT:
        return `
          top: 0;
          left: 0;
          height: 100vh;
        `;
      case MODAL_SIDES.RIGHT:
        return `
          top: 0;
          right: 0;
          height: 100vh;
        `;
      case MODAL_SIDES.TOP:
        return `
          top: 0;
          left: 0;
          width: 100vw;
        `;
      case MODAL_SIDES.BOTTOM:
        return `
          bottom: 0;
          left: 0;
          width: 100vw;
        `;
      case MODAL_SIDES.CENTER:
        return `
          top: 50%;
          left: 50%;
        `;
    }
  }}
`;

export const ModalBackground = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
`;
