import styled from "styled-components";
import { motion } from "framer-motion"; // <-- Import framer-motion

export const Floating = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${props => props.top ? "50px" : "none"};
  bottom: ${props => !props.top ? "50px" : "none"};
  right: ${props => props.right ? "50px" : "none"};
  left: ${props => !props.right ? "50px" : "none"};
  z-index: 9999;
`;
Floating.defaultProps = {
  whileHover: {
    scale: 1.1
  },
  whileTap: {
    x: 0,
    delay: 100
  },
  initial: {
    x: 0,
    y: 0,
    rotate: 0
  },
  animate: props => ({
    x: props.number > 3 && (props.right ? -props.distance : props.distance),
    y: props.number > 6 && (props.top ? props.distance : -props.distance)
  })
};
export const Container = styled(motion.div)`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: ${props => props.size}px;
  background-color: #8f1d30;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
Container.defaultProps = {
  whileHover: {
    scale: 1.2
  },
  whileTap: {
    scale: 0.8
  }
};
export const Item = styled(motion.div)`
  white-space: nowrap;
  position: absolute;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: ${props => props.size}px;
  background-color: #dbdbdb;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
Item.defaultProps = {
  whileHover: {
    scale: 1.2
  },
  whileTap: {
    scale: 0.8
  },
  initial: {
    y: 0,
    x: 0,
    opacity: 0
  },
  animate: props => ({
    y: Math.sin(props.i) * props.distance,
    x: Math.cos(props.i) * props.distance,
    opacity: 1
  }),
  transition: {
    y: {
      type: "spring",
      stiffness: 500,
      damping: 10
    },
    x: {
      type: "spring",
      stiffness: 500,
      damping: 10
    },
    boxShadow: {
      delay: 300,
      type: "spring",
      stiffness: 500,
      damping: 10
    },
    default: {
      duration: 150
    }
  }
};