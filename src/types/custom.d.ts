declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module '*.module.scss' {
  const content: { [className: string]: string };
  export default content;
}
