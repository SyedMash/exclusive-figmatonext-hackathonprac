import Link from "next/link";
import React from "react";
import { BiArrowToRight } from "react-icons/bi";

const Links = ({
  firstTitle,
  SecondTitle,
  href,
  customClass,
  isArrow,
}: {
  firstTitle: string;
  SecondTitle?: string;
  href: string;
  customClass?: string;
  isArrow?: boolean;
}) => {
  return (
    <Link href={"/"} className="flex items-center justify-between gap-5">
      {firstTitle} {SecondTitle}
      {isArrow && <BiArrowToRight className="text-2xl" />}
    </Link>
  );
};

export default Links;
