import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { useCategories } from "../../react-query/queries";
import "./Chips.css";

const Chips = () => {
  const { data } = useCategories();
  const [selected, setSelected] = useState("All");
  const arrowLeftRef = useRef();
  const arrowRightRef = useRef();
  const chipsWrapperRef = useRef();
  const chipsRef = useRef();

  useEffect(() => {
    if (
      !chipsRef.current ||
      !chipsWrapperRef.current ||
      !arrowLeftRef.current ||
      !arrowRightRef.current
    )
      return;

    const scrollListener = () => {
      let allChipsWidth = 0;
      for (const chip of chipsRef.current.children) {
        const style = chip.currentStyle ?? window.getComputedStyle(chip);
        const width = chip.getBoundingClientRect().width;
        const margin =
          parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        allChipsWidth += width + margin;
      }

      const chipsWrapperWidth =
        chipsWrapperRef.current.getBoundingClientRect().width;
      const chipsInvisibleWidth = allChipsWidth - chipsWrapperWidth;
      const chipsPosition = chipsRef.current.scrollLeft;
      const chipsEndOffset = chipsInvisibleWidth - 10;

      if (chipsPosition < chipsEndOffset) {
        arrowLeftRef.current.classList.remove("arrow--hidden");
        arrowRightRef.current.classList.remove("arrow--hidden");
      }
      if (chipsPosition <= 0) {
        arrowLeftRef.current.classList.add("arrow--hidden");
      }
      if (chipsPosition >= chipsEndOffset) {
        arrowRightRef.current.classList.add("arrow--hidden");
      }
    };
    scrollListener();

    const chips = chipsRef.current;
    chips.addEventListener("scroll", scrollListener);
    window.addEventListener("resize", scrollListener);

    return () => {
      chips.removeEventListener("scroll", scrollListener);
      window.removeEventListener("resize", scrollListener);
    };
  }, [data?.categories]);

  return (
    <div ref={chipsWrapperRef} className="chips__container py-1 fw-500">
      <button
        ref={arrowLeftRef}
        onClick={() => {
          chipsRef.current.scrollTo({
            left: chipsRef.current.scrollLeft - 150,
            behavior: "smooth"
          });
        }}
        className="arrow arrow--left">
        <ChevronLeft fontSize="large" />
      </button>
      <div ref={chipsRef} className="chips">
        {data?.categories?.map(({ id, name }) => (
          <div
            key={id}
            className={`chips__item ${
              selected === name ? "chips__item--selected" : ""
            } cursor-pointer ml-2 py-1 px-2`}
            onClick={() => setSelected(name)}>
            {name}
          </div>
        ))}
      </div>
      <button
        ref={arrowRightRef}
        onClick={() => {
          chipsRef.current.scrollTo({
            left: chipsRef.current.scrollLeft + 150,
            behavior: "smooth"
          });
        }}
        className="arrow arrow--right">
        <ChevronRight fontSize="large" />
      </button>
    </div>
  );
};

export { Chips };
