import { NextResponse } from 'next/server';
import members from '../../../data/members.json';

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');
  const id = searchParams.get('id');

  // If no members, go back to home
  if (!members || members.length === 0) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (action === 'random') {
    const randomIndex = Math.floor(Math.random() * members.length);
    return NextResponse.redirect(new URL(members[randomIndex].url));
  }

  // Without an ID, we can't determine prev/next, so go home
  if (!id) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const currentIndex = members.findIndex(m => m.id === id);
  
  // If ID is invalid, go home
  if (currentIndex === -1) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (action === 'prev') {
    const prevIndex = currentIndex === 0 ? members.length - 1 : currentIndex - 1;
    return NextResponse.redirect(new URL(members[prevIndex].url));
  }

  if (action === 'next') {
    const nextIndex = currentIndex === members.length - 1 ? 0 : currentIndex + 1;
    return NextResponse.redirect(new URL(members[nextIndex].url));
  }

  // Fallback
  return NextResponse.redirect(new URL('/', request.url));
}
