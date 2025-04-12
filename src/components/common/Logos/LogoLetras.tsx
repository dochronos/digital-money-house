"use client";

import Link from "next/link";

type LogoLetrasProps = {
  href?: string;
  className?: string;
};

const LogoLetras = ({ href = "/", className }: LogoLetrasProps) => {
  return (
    <Link href={href} className={`flex items-center justify-center ${className}`}>
      <div className="relative w-[344px] h-[38px]">
        <div className="absolute left-0 top-0">
          <svg
            width="121"
            height="38"
            viewBox="0 0 121 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10C0 4.47715 4.47715 0 10 0H121V38H10C4.47715 38 0 33.5228 0 28V10Z"
              fill="#C1FD35"
            />
          </svg>
        </div>
        <div className="absolute left-[344px] top-[38px]">
          <svg
            width="223"
            height="38"
            viewBox="0 0 223 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M223 28C223 33.5228 218.523 38 213 38L0 38L0 0L213 0C218.523 0 223 4.47717 223 10V28Z"
              fill="#201F22"
            />
          </svg>
        </div>
        <div className="absolute left-[7px] top-[3px] w-[113px] text-[#201f22] text-3xl font-extrabold leading-[34.11px]">
          DIGITAL
        </div>
        <div className="absolute left-[127px] top-[3px] w-[216px] text-white text-3xl font-medium leading-[34.11px]">
          MONEY HOUSE
        </div>
      </div>
    </Link>
  );
};

export default LogoLetras;
