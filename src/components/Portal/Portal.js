import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { createWrapperAndAppendToBody } from "../../utils/createWrapperAndAppendToBody";

const Portal = ({ children, wrapperId = "react-portal-wrapper" }) => {
  const [wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export { Portal };
