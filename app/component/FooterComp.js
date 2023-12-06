import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
} from "flowbite-react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterComp = () => {
  return (
    <Footer container className="bg-secondary">
      <div className="w-full">
        <div className="flex w-full justify-center ">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Logo Navbar"
              width={100}
              height={60}
            ></Image>
          </Link>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="/"
            by="Amarillo"
            year={2023}
            className="text-white"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              href="https://www.linkedin.com/in/imam-afizi/"
              target="_blank"
              icon={BsLinkedin}
              className="text-white"
            />
            <FooterIcon
              href="https://www.instagram.com/amarillo_pku/"
              target="_blank"
              icon={BsInstagram}
              className="text-white"
            />
            <FooterIcon
              href="https://twitter.com/AfiziImam69748"
              target="_blank"
              icon={BsTwitter}
              className="text-white"
            />
            <FooterIcon
              href="https://github.com/imamafizi/"
              target="_blank"
              icon={BsGithub}
              className="text-white"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
