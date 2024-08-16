"use client";
import RegisterButton from "@/UIComponents/buttons/RegisterButton";
import InputField from "@/UIComponents/InputBox/InputField";
import SvgGoogle from "@/UIComponents/SVG/SvgGoogle";
import SvgOnlineRegister from "@/UIComponents/SVG/SvgOnlineRegister";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center px-8 py-5">
      <div className="flex  w-[70%]">
        <div className="flex flex-col gap-3 w-[70%] mr-[-1rem] bg-white mt-[2rem] border rounded-2xl pr-12 pl-8 py-4 border-slate-300 shadow-lg shadow-blue-300">
          <div className="flex text-slate-800 text-lg font-bold">
            New to Career Nexus?
          </div>

          <div>
            <ul className="list-disc list-inside pl-5 flex flex-col gap-3">
              <li className="text-slate-800 text-[1rem] leading-[1.125rem] font-[400]">
                {"with one click using your profile."}
              </li>
              <li className="text-slate-800 text-[1rem] leading-[1.125rem] font-[400]">
                {"Get job alerts tailored to you."}
              </li>
              <li className="text-slate-800 text-[1rem] leading-[1.125rem] font-[400]">
                {"Get noticed by top companies."}
              </li>
              <li className="text-slate-800 text-[1rem] leading-[1.125rem] font-[400]">
                {"  Track your job applications easily."}
              </li>
            </ul>
          </div>
          <div className="flex mt-5">
            <RegisterButton className="bg-orange-500 hover:bg-orange-400">
              {"Register for free"}
            </RegisterButton>
          </div>

          <div className="flex w-full  justify-end">
            <SvgOnlineRegister />
          </div>
        </div>
        <div className="flex flex-col border w-[35%] border-slate-300  shadow-lg shadow-blue-300 gap-4 rounded-xl p-8 bg-white ">
          <div className="flex font-bold text-slate-800 text-xl">
            {"Login page"}
          </div>
          <div className="flex  flex-col gap-4">
            <InputField
              label={"Email Id / Username"}
              placeholder={"Enter email or username"}
              value={""}
              onChange={() => ""}
            />
            <div className="flex flex-col gap-2">
              <InputField
                label={"Password"}
                placeholder={"Enter password"}
                value={""}
                onChange={() => ""}
              />
              <div className="flex justify-end mr-2">
                <p className="flex cursor-pointer text-blue-600 text-sm font-normal">
                  <Link href={"/forgot-password"}>{"Forgot password?"}</Link>
                </p>
              </div>
            </div>
            <div>
              <RegisterButton className="w-full">{"Login"}</RegisterButton>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex w-full h-[0.025rem] bg-slate-300 rounded-xl"></div>
              <p className="flex font-normal text-[0.75rem] leading-4 text-slate-500">
                Or
              </p>
              <div className="flex w-full h-[0.025rem] bg-slate-300 rounded-xl"></div>
            </div>
            <div>
              <div className="flex rounded-3xl justify-between border cursor-pointer py-3 px-6 border-slate-300 shadow-md ">
                <div>
                  {" "}
                  <SvgGoogle />
                </div>
                <p className="flex text-slate-400 font-semibold text-base ">
                  {"Sign with Google"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
