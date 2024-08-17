import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "../../model/user"; // Adjust the path to your User model

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const { email, password } = await req.json();

    // Validate inputs
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Find user by email and explicitly select the password field
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Validate password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }
    // Exclude the password field from the response
    const { password: _, ...userWithoutPassword } = user.toObject();

    return NextResponse.json(
      {
        message: 'Login successful',
        userInfo: { ...userWithoutPassword, userLogged: true},
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
