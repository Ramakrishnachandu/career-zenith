"use client";
import React, { useState } from "react";
import Logo from "../logo/Logo";
import JobSearchModal from "../modals/JobSearchModal";
import PrimaryButton from "../buttons/PrimaryButton";
import RegisterButton from "../buttons/RegisterButton";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useUserStore from "@/store/userStore/useUserStore";
import LogoSmall from "../logo/LogoSmall";
import SvgCancel from "../SVG/SvgCancel";
import SvgMenu from "../SVG/SvgMenu";
import { extractNameLetters } from "@/functions/extractName";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const handleSearch = (query: {
    skills: string;
    experience: string;
    location: string;
  }) => {
    console.log("Searching for:", query);
    // Implement your search logic here
  };

  const { userInfo, logout } = useUserStore();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path: string) =>
    pathName === path
      ? "text-blue-600 font-bold"
      : "text-slate-900 hover:text-blue-500";

  const NameLetters = extractNameLetters?.(userInfo?.name);
  return (
    <header className="bg-slate-50 z-10 w-full gap-2 sticky top-0 border-b z-999 shadow-sm shadow-slate-300 border-slate-300 py-4 px-6 md:px-8">
      <div className="flex items-center gap-4 justify-between flex-wrap">
        <Link href="/">
          <Logo />
        </Link>
        <button
          type="button"
          className="cursor-pointer md:hidden border border-blue-300 rounded-lg gap-2 p-1 shadow-lg shadow-blue-200"
          onClick={toggleSidebar}
        >
          <SvgMenu />
        </button>

        {/* Navigation Links */}
        <nav className="flex-grow hidden md:flex md:justify-start">
          <ul className="flex gap-6 text-sm md:text-base">
            <li
              className={`flex cursor-pointer border-b-2 p-1 border-transparent hover:border-blue-600`}
            >
              <Link href="/jobsearch">{"Jobs"}</Link>
            </li>
            <li className="flex cursor-pointer border-b-2 p-1 border-transparent hover:border-blue-600">
              <Link href="/skillTests">{"Skill Tests"}</Link>
            </li>
            <li className="flex cursor-pointer border-b-2 p-1 border-transparent hover:border-blue-600">
              <Link href="/services">{"Services"}</Link>
            </li>
          </ul>
        </nav>

        {/* Search Modal */}
        <div className="hidden md:flex justify-center">
          <JobSearchModal onSearch={handleSearch} />
        </div>

        <div className="hidden md:flex gap-4 mt-4 md:mt-0">
          {userInfo?.userLogged ? (
            <>
              <div className="flex border gap-2 px-[0.375rem] py-1 justify-between items-center  border-blue-800 bg-blue-700 rounded-3xl">
                <p
                  title={userInfo?.name}
                  className="font-semibold text-base text-white truncate"
                >
                  {userInfo?.name || "No user"}
                </p>
                <div className="flex bg-orange-600 border text-base text-white font-semibold rounded-full p-[5px]">
                  {NameLetters || "NU"}
                </div>
              </div>
              <PrimaryButton
                onClick={() => {
                  logout();
                  router?.push("/");
                }}
              >
                {"Log out"}
              </PrimaryButton>
            </>
          ) : (
            <>
              <PrimaryButton onClick={() => router?.push("/login-page")}>
                {"Login"}
              </PrimaryButton>
              <RegisterButton
                className="bg-orange-500 border border-orange-600 hover:bg-orange-400"
                onClick={() => router?.push("/registration")}
              >
                {"Register"}
              </RegisterButton>
              <PrimaryButton
                className="hidden md:block"
                onClick={() => router?.push("/resume-builder")}
              >
                {"Resume Builder"}
              </PrimaryButton>
            </>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-50 rounded-lg  flex flex-col justify-between z-50 transform transition-transform duration-300 ${isSidebarOpen
            ? "translate-x-0 shadow-blue-300 shadow-lg"
            : "-translate-x-full"
          }`}
      >
        <div className="flex justify-start  flex-col gap-4 px-4 py-3">
          <div className="flex gap-2 items-center w-full justify-between">
            <Link href="/">
              <LogoSmall />
            </Link>
            <button
              className="flex border border-slate-300 p-1 box-border rounded-md shadow-md shadow-blue-300"
              onClick={toggleSidebar}
            >
              <SvgCancel />
            </button>
          </div>
          {userInfo?.userLogged && (
            <div className="flex border gap-2 px-[0.375rem] py-1 justify-between items-center  border-blue-800 bg-blue-700 rounded-3xl">
              <p
                title={userInfo?.name}
                className="font-semibold text-base text-white truncate"
              >
                {userInfo?.name || "No User"}
              </p>
              <div className="flex bg-orange-600 border text-base text-white font-semibold rounded-full p-[5px]">
                {NameLetters || "NU"}
              </div>
            </div>
          )}

          <ul className="flex flex-col gap-6 text-sm md:text-base">
            <li className={`flex cursor-pointer   border-transparent `}>
              <Link
                className={` ${isActive("/jobsearch")}`}
                href="/jobsearch"
                onClick={toggleSidebar}
              >
                {"Jobs"}
              </Link>
            </li>
            <li className={`flex cursor-pointer  border-transparent`}>
              <Link
                className={`${isActive("/skillTests")}`}
                href="/skillTests"
                onClick={toggleSidebar}
              >
                {"Skill Tests"}
              </Link>
            </li>
            <li className={`flex cursor-pointer  border-transparent `}>
              <Link
                className={` ${isActive("/services")}`}
                href="/services"
                onClick={toggleSidebar}
              >
                {"Services"}
              </Link>
            </li>
          </ul>

          <div className="flex gap-2 flex-col">
            {userInfo?.userLogged ? (
              <PrimaryButton
                onClick={() => {
                  toggleSidebar();
                  logout();
                  router?.push("/");
                }}
              >
                {"Log out"}
              </PrimaryButton>
            ) : (
              <>
                <PrimaryButton
                  onClick={() => {
                    router?.push("/login-page");
                    toggleSidebar();
                  }}
                >
                  {"Login"}
                </PrimaryButton>
                <RegisterButton
                  className="bg-orange-500 border border-orange-600 hover:bg-orange-400"
                  onClick={() => {
                    router?.push("/registration");
                    toggleSidebar();
                  }}
                >
                  {"Register"}
                </RegisterButton>
              </>
            )}
          </div>
        </div>
        <div className="flex p-4 w-full justify-center">
          <RegisterButton
          className="flex w-full items-center justify-center"
            onClick={() => {
              toggleSidebar();
              router?.push("/developer-profile");
            }}
          >
            {"Developer - Profile"}
          </RegisterButton>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </header>
  );
};

export default Header;
