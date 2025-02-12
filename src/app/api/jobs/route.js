import { NextResponse } from 'next/server';
import { connectDb } from '@/utils/connectdb';
import jwt from 'jsonwebtoken';
import { revalidatePath } from 'next/cache';
import job from '@/models/jobModel';
import { validateJWT } from '@/lib/validateJWT';

connectDb();

export async function POST(req) {
  try {
    const userId = await validateJWT(req);
    if (!userId) {
      return NextResponse.json(
        {
          message: 'Invalid token, please login and try again.',
          data: null,
        },
        { status: 401 }
      );
    }
    const reqbody = await req.json();
    const job = await Job.create({ ...reqbody, user: userId });
    NextResponse.json({ message: 'Job created Successfully!', data: job });
    revalidatePath('/');
  } catch (err) {
    console.log(error);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const jobs = await Job.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ data: jobs });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch jobs' },
      { status: 500 }
    );
  }
}
