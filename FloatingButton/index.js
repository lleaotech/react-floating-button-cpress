/**
 * @param {number} size             the size  of the buttons.
 * @param {boolean} top             specify if the button should be on the top if false the
 * button will be at the bottom.
 * @param {boolean} right           specify if the button should be on the right if false the
 * button will be at the left.
 * @param {string} color            the backgroundColor for the main button
 * @children should be an Item component with params :
 *  @param {string} imgSrc          the icon to use on given button
 *  @param {function} onClick       the callback function call onClick
 *  @param {string} backgroundColor            the backgroundColor for the Item
 */

import React, { useState, useEffect, useRef } from "react";
import { Container, Floating, Item } from "./styles";
import { AnimatePresence, motion } from "framer-motion";  // <-- Import framer-motion
import PropTypes from "prop-types";
import MenuToggle from "./hamburger";

const rotations = {
  "3": [
    [(3 * Math.PI) / 2, Math.PI],
    [0, Math.PI / 2],
  ],
  "6": [
    [Math.PI, Math.PI],
    [0, 0],
  ],
};

function FloatingButton({
  backgroundColor,
  color,
  size,
  top,
  right,
  icon,
  children,
}) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);

  let number = React.Children.count(children);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  function getAngle(i) {
    const angle =
      number <= 3 ? Math.PI / 2 : number <= 6 ? Math.PI : 2 * Math.PI;
    const rotate =
      rotations[number <= 3 ? "3" : "6"][Number(top)][Number(right)];
    return {
      angle:
        rotate +
        (number <= 6 ? (i * angle) / (number - 1) : (i * angle) / number),
      distance:
        number <= 6
          ? size / Math.sin(angle / (number - 1)) + size / 2
          : size / Math.sin(angle / number) + size / 2,
    };
  }

  return (
    <Floating
      onClick={() => {
        setExpanded(!expanded);
      }}
      top={top}
      right={right}
      ref={ref}
    >
      <Container
        size={size}
        style={{ backgroundColor: `${backgroundColor || "none"}` }}
      >
        {icon ? (
          <img
            src={icon}
            style={{
              height: size / 2,
              width: size / 2,
            }}
            alt={"icon"}
          />
        ) : (
          <MenuToggle expanded={expanded} color={color} size={size} />
        )}
      </Container>
      <AnimatePresence>
        {expanded &&
          [...Array(number)].map((x, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Item
                i={getAngle(i).angle}
                size={size}
                distance={getAngle(i).distance}
                style={{
                  backgroundColor: children[i].props.backgroundColor,
                }}
                onClick={() => children[i].props.onClick()}
              >
                <img
                  src={children[i].props.imgSrc}
                  style={{ height: size / 2, width: size / 2 }}
                  alt={`icon-${i}`}
                />
              </Item>
            </motion.div>
          ))}
      </AnimatePresence>
    </Floating>
  );
}

FloatingButton.defaultProps = {
  color: "#dbdbdb",
  backgroundColor: "#8f1d30",
  size: 60,
  top: false,
  right: true,
  children: {},
};

FloatingButton.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.number,
  top: PropTypes.bool,
  right: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default FloatingButton;
export { FloatingButton };
export { Item };
