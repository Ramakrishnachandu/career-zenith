// app/api/users/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "../../model/user";
import bcrypt from "bcryptjs";

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

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      mobile,
      city,
      workStatus,
    });
    await newUser.save();

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
