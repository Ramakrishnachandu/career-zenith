// app/api/users/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "../../model/user";
import sendWelcomeEmailToUser from "@/utils/SendWelcomeMail";
import { use } from "react";
// import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    await dbConnect();

    const { name, email, password, mobile, city, workStatus } =
      await request.json();

    // Validate input
    if (!name || !email || !password || !mobile || !city || !workStatus) {
      return NextResponse.json(
        { message: "All fields are required", success: false },
        { status: 400 }
      );
    }

    // // Hash the password before saving
    // const hashedPassword = await bcrypt.hash(password, 10);
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }
    // Create a new user with the hashed password
    const newUser = new User({
      name,
      email,
      password,
      mobile,
      city,
      workStatus,
    });
    await newUser.save();
    // Send a welcome email
    await sendWelcomeEmailToUser({
      email: email,
      name: name
    })

    return NextResponse.json(
      { message: "User created successfully", user: newUser, success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Server error", error: error },
      { status: 500 }
    );
  }
}
