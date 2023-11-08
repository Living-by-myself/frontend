import useOverlayStore from "@/store/useOverlayStore";
import { Fragment } from "react";
import { createPortal } from "react-dom";

const ModalView = () => {
  const { overlays } = useOverlayStore();
  return (
    <>
      {createPortal(
        <>
          {[...overlays.entries()].map(([id, element]) => (
            <Fragment key={id}>{element}</Fragment>
          ))}
        </>,
        document.querySelector("#modal")!,
      )}
    </>
  );
};

export default ModalView;
