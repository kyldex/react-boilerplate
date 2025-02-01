import breakpoints from '../styles/_exports.module.scss';

export const SM_BREAKPOINT_NUMBER = parseInt(
  breakpoints.smBreakpoint.replace('px', ''),
  10
);
