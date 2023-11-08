import styled from "styled-components";
import { Side } from ".";
import { ModalSide } from "@/constants/Modal";

type ModalWrapperProps = {
  side: Side;
};

export const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  ${({ side }) => {
    switch (side) {
      case ModalSide.LEFT:
        return `
          top: 0;
          left: 0;
          height: 100vh;
        `;
      case ModalSide.RIGHT:
        return `
          top: 0;
          right: 0;
          height: 100vh;
        `;
      case ModalSide.TOP:
        return `
          top: 0;
          left: 50%;
          transform: translate(-50%, 0);
          width: 100vw;
        `;
      case ModalSide.BOTTOM:
        return `
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 0);
          width: 100vw;
        `;
      case ModalSide.CENTER:
        return `
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `;
    }
  }}
`;

export const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
`;
