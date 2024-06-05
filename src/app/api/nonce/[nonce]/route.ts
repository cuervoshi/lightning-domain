import { NextRequest, NextResponse } from 'next/server';
import { AUTOCREATE_NONCE } from '~/constants/constants';
import { prisma } from '~/server/db';

export async function GET(request: NextRequest, { params }: { params: { nonce: string } }) {
  let nonce = params.nonce;

  // Check if exists
  if (!nonce) return NextResponse.json({ data: 'Not found' }, { status: 404 });

  // Return true if its the autocreate nonce
  if (AUTOCREATE_NONCE && AUTOCREATE_NONCE === nonce)
    return NextResponse.json({ data: { status: true } }, { status: 200 });

  // Find identity record by name
  const nonceRecord = await prisma.nonce.findUnique({
    where: {
      nonce,
    },
  });

  // Check if exists
  if (!nonceRecord) return NextResponse.json({ data: { status: false, error: 'Not found' } }, { status: 404 });

  // Check if burned
  if (nonceRecord.burned) {
    return NextResponse.json({ data: { status: false, error: 'Nonce has been burned' } }, { status: 410 });
  } else {
    return NextResponse.json({ data: { status: true } }, { status: 200 });
  }
}