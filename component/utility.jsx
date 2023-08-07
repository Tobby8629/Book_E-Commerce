// utils/motionUtils.js
import { useBreakpointValue } from '@chakra-ui/react';

const useResponsiveMotionValue = (values) => {
  return useBreakpointValue(values) || values[values.length - 1];
};

export default useResponsiveMotionValue
