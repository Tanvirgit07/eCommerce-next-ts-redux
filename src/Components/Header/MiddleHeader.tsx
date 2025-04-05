import Image from "next/image";
import React from "react";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { LiaUser } from "react-icons/lia";
import HeaderIcon from "./HeaderIcon";
import MobileNavigation from "./MobileNavigation";

function MiddleHeader() {
  return (
    <div className="border-b-[1px] border-b-gray-400">
      <div className="max-w-[1140px] mx-auto px-4 py-5 flex items-center gap-4 md:gap-6 lg:gap-20 justify-between">
        <Link href="/">
          <Image
            src="/images/logo.webp"
            alt="images"
            width={100}
            height={50}
            className="w-28"
            priority
          />
        </Link>

        <SearchInput />

        <div className="hidden md:inline-flex items-center gap-3">
            <Link href="/signin" className="flex items-center gap-2 text-sm">
                <div className="border-2 border-gray-700 p-1.5 rounded-full">
                    <LiaUser />
                </div>
                <div>
                    <p className="text-xs">Hello, Guests</p>
                    <p>Login / Register</p>
                </div>
            </Link>
            <HeaderIcon />
        </div>
        <MobileNavigation />
      </div>
    </div>
  );
}

export default MiddleHeader;
