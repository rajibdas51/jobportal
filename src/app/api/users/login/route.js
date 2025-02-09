import { NextResponse } from 'next/server';
import { connectDb } from '@/utils/connectdb';
import bcrypt from 'bcryptjs';
import User from '@/models/userModel';
import jwt from 'jsonwebtoken';
import { revalidatePath } from 'next/cache';

connectDb();

export async function POST(req) {
  try {
    const reqbody = await req.json();
    const { email, password } = reqbody;
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error('User not found!');
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Invalid password!');
    }

    // create token
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        iat: Math.floor(Date.now() / 1000),
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      }
    );

    const response = NextResponse.json(
      {
        message: 'Sign in Successfull!',
        success: true,
        token: token,
      },
      { status: 200 }
    );

    // set cookies for token
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.Node_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24,
    });
    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
