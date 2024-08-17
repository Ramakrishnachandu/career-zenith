"use client";
import RegisterButton from "@/UIComponents/buttons/RegisterButton";
import FileUpload from "@/UIComponents/InputBox/FileUpload";
import InputField from "@/UIComponents/InputBox/InputField";
import SvgBook from "@/UIComponents/SVG/SvgBook";
import SvgBriefcase from "@/UIComponents/SVG/SvgBriefcase";
import SvgRegister from "@/UIComponents/SVG/SvgRegister";
import React, { useState } from "react";

const RegistrationPage = () => {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        city: "",
        workStatus: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        city: "",
        workStatus: "",
    });
    const validateField = (id: string, value: string) => {
        let error = "";
        switch (id) {
            case "name":
                if (!value.trim()) error = "Name is required";
                break;
            case "email":
                if (!value.includes("@")) error = "Invalid email address";
                break;
            case "password":
                if (value.length < 6) error = "Password must be at least 6 characters";
                break;
            case "mobile":
                if (!/^\d{10}$/.test(value)) error = "Invalid mobile number";
                break;
            case "city":
                if (!value.trim()) error = "City is required";
                break;
            case "workStatus":
                if (!value) error = "Work status is required";
                break;
            default:
                break;
        }
        setErrors((prevErrors) => ({ ...prevErrors, [id]: error }));
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        validateField(id, value);
    };

    const handleWorkStatusChange = (value: string) => {
        setFormData({ ...formData, workStatus: value });
        validateField("workStatus", value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate all fields
        const newErrors = { ...errors };
        Object.keys(formData).forEach((key) => {
            validateField(key, formData[key as keyof typeof formData]);
            newErrors[key as keyof typeof formData] =
                errors[key as keyof typeof formData];
        });

        // Check if there are any errors
        const hasErrors = Object.values(newErrors).some((error) => error);
        if (hasErrors) {
            setErrors(newErrors); // Update the errors state
            return; // Stop submission if there are errors
        }
        alert("Data Submitted Successfully!..");
        // If no errors, proceed with API call
        // try {
        //     const form = new FormData();
        //     form.append("name", formData.name);
        //     form.append("email", formData.email);
        //     form.append("password", formData.password);
        //     form.append("mobile", formData.mobile);
        //     form.append("city", formData.city);
        //     form.append("workStatus", formData.workStatus);

        //     const response = await fetch("/api/registration", {
        //         method: "POST",
        //         body: form,
        //     });

        //     const result = await response.json();
        //     if (response.ok) {
        //         alert("Registration successful");
        //     } else {
        //         alert(result.message || "Something went wrong");
        //     }


        // } catch (error) {
        //     console.error("Error submitting form:", error);
        //     alert("Failed to submit form");
        // }
    };

    const handleFileUpload = (file: File) => {
        console.log("File uploaded:", file);
        setUploadedFile(file);
    };

    const handleFileDelete = () => {
        console.log("File deleted");
        setUploadedFile(null);
    };

    return (
        <div className="flex gap-8 px-14 py-12 items-start justify-center">
            <div className="flex flex-col border border-slate-300 gap-4 py-4 px-8 rounded-2xl bg-white shadow-md shadow-blue-300">
                <div className="flex justify-center">
                    <SvgRegister />
                </div>
                <div className="flex text-slate-800 text-[1.125rem] leading-6 font-bold">
                    {"Why Register?"}
                </div>
                <div>
                    <ul className="list-disc list-inside pl-5 flex flex-col gap-3">
                        <li className="text-slate-800 text-[1rem] leading-[1.125rem] font-[500]">
                            {"Create a profile that attracts recruiters."}
                        </li>
                        <li className="text-slate-800 text-[1rem] leading-[1.125rem] font-[500]">
                            {" Receive job alerts straight to your inbox."}
                        </li>
                        <li className="text-slate-800 text-[1rem] leading-[1.125rem] font-[500]">
                            {"Find and land your dream job"}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col max-w-[55%] border bg-white shadow-lg shadow-blue-200 border-slate-300 gap-6 px-8 py-6 rounded-lg">
                <div className="flex flex-col gap-1">
                    <p className="text-slate-800 font-semibold text-xl">
                        Create your Nexus Profile
                    </p>
                    <p className="text-slate-800 font-normal text-sm">
                        Unlock Your Dream Job with India’s Premier Job Site
                    </p>
                </div>
                <div className="w-full h-[0.025rem] bg-slate-300 rounded-md"></div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <InputField
                        label="Full name"
                        placeholder="What is your name?"
                        maxLength={35}
                        value={formData.name}
                        onChange={handleInputChange}
                        id="name"
                        required
                        error={errors?.name}
                    />
                    <InputField
                        label="Email Id"
                        placeholder="Tell us your Email ID"
                        maxLength={35}
                        value={formData.email}
                        onChange={handleInputChange}
                        id="email"
                        error={errors?.email}
                        required
                    />
                    <InputField
                        label="Password"
                        placeholder="Minimum 6 characters"
                        maxLength={12}
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        id="password"
                        error={errors?.password}
                        required
                    />
                    <InputField
                        label="Enter your mobile number"
                        placeholder="Enter your mobile number"
                        maxLength={35}
                        type="tel"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        id="mobile"
                        error={errors?.mobile}
                        required
                    />
                    <InputField
                        label="City"
                        placeholder="Enter your city"
                        maxLength={35}
                        type="text"
                        value={formData.city}
                        onChange={handleInputChange}
                        id="city"
                        error={errors?.city}
                        required
                    />
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-start">
                            <span>{"Work Status"}</span>
                            <span className="text-red-500">*</span>
                        </div>
                        <div className="flex w-full flex-wrap gap-4">
                            <label
                                className={`flex flex-col min-w-[13.75rem] w-[45%] rounded-xl cursor-pointer border gap-2 py-2 px-4 shadow-lg 
                  ${formData.workStatus === "experienced"
                                        ? "border-blue-600 bg-blue-50 shadow-blue-300"
                                        : "border-slate-300 shadow-blue-100"
                                    }
                  hover:shadow-blue-200`}
                            >
                                <input
                                    type="radio"
                                    name="workStatus"
                                    value="experienced"
                                    className="hidden"
                                    checked={formData.workStatus === "experienced"}
                                    onChange={() => handleWorkStatusChange("experienced")}
                                />
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col">
                                        <p className="text-base font-normal text-slate-800">
                                            {` I'm experienced`}
                                        </p>
                                        <p className="text-sm font-normal text-slate-600">
                                            I have work experience (excluding internships)
                                        </p>
                                    </div>
                                    <SvgBriefcase />
                                </div>
                            </label>
                            <label
                                className={`flex flex-col min-w-[13.75rem] w-[45%] rounded-xl cursor-pointer border gap-2 py-2 px-4 shadow-lg 
                  ${formData.workStatus === "fresher"
                                        ? "border-blue-600 bg-blue-50 shadow-blue-300"
                                        : "border-slate-300 shadow-blue-100"
                                    }
                  hover:shadow-blue-200`}
                            >
                                <input
                                    type="radio"
                                    name="workStatus"
                                    value="fresher"
                                    className="hidden"
                                    checked={formData.workStatus === "fresher"}
                                    onChange={() => handleWorkStatusChange("fresher")}
                                />
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col">
                                        <p className="text-base font-normal text-slate-800">
                                            {` I'm a fresher`}
                                        </p>
                                        <p className="text-sm font-normal text-slate-600">
                                            {` I am a student/ Haven't worked after graduation`}
                                        </p>
                                    </div>
                                    <SvgBook />
                                </div>
                            </label>
                        </div>
                        {errors.workStatus && (
                            <p className="text-red-500 text-sm">{errors.workStatus}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>{'Resume'}</p>
                        <FileUpload
                            onFileUpload={handleFileUpload}
                            onFileDelete={handleFileDelete}
                        />
                    </div>
                    <p className="mt-4 text-xs font-normal text-slate-500">
                        By clicking Register, you agree to the <span className="text-blue-600">Terms and Conditions</span>  &
                        <span className="text-blue-600"> Privacy Policy</span> of Career-Nexus.vercel.app
                    </p>
                    <div className="flex justify-center">
                        <RegisterButton
                            className="bg-blue-600"
                            type="submit"
                            disabled={false}
                        >
                            Register now
                        </RegisterButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;