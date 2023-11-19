import useOverlayStore from "@/store/useOverlayStore";
import { AnimatePresence } from "framer-motion";
import { Fragment, useEffect } from "react";
import { createPortal } from "react-dom";

const ModalView = () => {
  const { overlays } = useOverlayStore();

  useEffect(() => {
    if (overlays.size > 0) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [overlays]);

  return (
    <>
      {createPortal(
        <AnimatePresence mode="wait">
          {[...overlays.entries()].map(([id, element]) => (
            <Fragment key={id}>{element}</Fragment>
          ))}
        </AnimatePresence>,
        document.querySelector("#modal")!,
      )}
    </>
  );
};

export default ModalView;
