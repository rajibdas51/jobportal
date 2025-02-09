import User from '@/models/userModel';
import { validateJWT } from '@/lib/validateJWT';
import { NextResponse } from 'next/server';

import { connectDb } from '@/utils/connectdb';

connectDb();
export async function GET(request) {
  try {
    // get the user id from the token
    const userId = await validateJWT(request);

    // if no userId is found, return a 401(Unauthorized) response
    if (!userId) {
      return NextResponse.json(
        { message: 'Unauthorized user!', data: null },
        { status: 401 }
      );
    }

    const user = await User.findById(userId).select('-password');
    if (!user) {
      return NextResponse.json(
        { message: 'User not Found', data: null },
        { status: 404 }
      );
    }
    return NextResponse.json({
      message: 'User data fetched Successfully!',
      data: user,
    });
  } catch (error) {
    // Differentiate between different types of errors
    if (error.name === 'JsonWebTokenError') {
      return NextResponse.json(
        { message: 'Invalid token', data: null },
        { status: 401 }
      );
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
