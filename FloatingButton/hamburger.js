import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";  // <-- Import framer-motion
import PropTypes from "prop-types";

const ToggleWrapper = styled.span`
  cursor: pointer;
  display: flex;
  height: ${(props) => props.size / 2}px;
  position: relative;
  width: ${(props) => props.size / 2}px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Line = styled(motion.div)`  // <-- Use motion component
  height: ${(props) => props.size * 0.05}px;
  width: ${(props) => props.size * 0.5}px;
  border: white;
  border-radius: ${(props) => props.size * 0.05}px;
  background-color: ${(props) => props.color};
`;

const lineVariants = {
  open: (size) => ({
    y: size / 6,
    rotate: 45,
  }),
  closed: { y: 0, rotate: 0 },
};

const line2Variants = {
  open: {
    rotate: 0,
    width: 0,
  },
  closed: (size) => ({ width: size * 0.5, rotate: 0 }),
};

const line3Variants = {
  open: (size) => ({
    y: -size / 6,
    rotate: -45,
  }),
  closed: { y: 0, rotate: 0 },
};

const MenuToggle = ({ size, color }) => {
  const [open, setOpen] = useState(false);

  return (
    <ToggleWrapper onClick={() => setOpen(!open)} size={size}>
      <Line
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={lineVariants}
        size={size}
        color={color}
      />
      <Line
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={line2Variants}
        size={size}
        color={color}
      />
      <Line
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={line3Variants}
        size={size}
        color={color}
      />
    </ToggleWrapper>
  );
};

MenuToggle.defaultProps = {
  size: 60,
  color: "white",
};

MenuToggle.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default MenuToggle;
