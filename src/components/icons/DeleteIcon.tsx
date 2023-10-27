import { SVGProps } from 'react';

export function DeleteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.color}
        d="M15 14c2.67 0 8 1.33 8 4v2H7v-2c0-2.67 5.33-4 8-4m0-2a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4M5 9.59l2.12-2.13l1.42 1.42L6.41 11l2.13 2.12l-1.42 1.42L5 12.41l-2.12 2.13l-1.42-1.42L3.59 11L1.46 8.88l1.42-1.42L5 9.59Z"
      ></path>
    </svg>
  );
}
