import { SVGProps } from 'react';

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill={props.color} d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"></path>
    </svg>
  );
}
