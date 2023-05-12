import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`https://crudcrud.com/api/${process.env.CRUD_ID}/movies`, {
    next: {
      revalidate: 600,
      tags: ["movies"]
    }
  });
  const movies = await res.json();
  return NextResponse.json(movies);
}

export async function POST(request: NextRequest) {
  await fetch(`https://crudcrud.com/api/${process.env.CRUD_ID}/movies`, {
    method: "POST",
    body: request.body,
    headers: {
      "Content-Type": "application/json"
    },
    next: {
      revalidate: 600,
      tags: ["movies"]
    }
  });
  return NextResponse.json({ "message": "movie created" });
}
