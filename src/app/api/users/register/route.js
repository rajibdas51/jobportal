import { NextResponse } from 'next/server';
import { connectDb } from '@/utils/connectdb';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';

connectDb();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    // check if user already exists
    const userExists = await User.findOne({ email: reqBody.email });
    if (userExists) {
      throw new Error('User already exists!');
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(reqBody.password, salt);
    reqBody.password = hashedPassword;

    // create new user
    await User.create(reqBody);
    revalidatePath('/');

    return NextResponse.json(
      {
        message: 'Sign Up Successfull!',
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
