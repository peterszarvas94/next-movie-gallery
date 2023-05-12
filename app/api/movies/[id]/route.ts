import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: string;
  };
}

export async function DELETE(
  _request: NextRequest,
  { params }: Props
) {
  const { id } = params;
  await fetch(`https://crudcrud.com/api/${process.env.CRUD_ID}/movies/${id}`, {
    method: "DELETE"
  });
  return NextResponse.json({ message: "deleted" });
}

export async function PUT(
  request: NextRequest,
  { params }: Props
) {
  await fetch(`https://crudcrud.com/api/${process.env.CRUD_ID}/movies/${params.id}`, {
    method: "PUT",
    body: request.body,
    headers: {
      "Content-Type": "application/json"
    },
    next: {
      revalidate: 600,
      tags: ["movies"]
    }
  });
  return NextResponse.json({ "message": "movie modified" });
}

// export async function PUT(
//   request: NextRequest,
//   { params }: Props
// ) {
//   const { id } = params;
//   const json = await request.json();
//
//   const res = await fetch(`https://crudcrud.com/api/${process.env.CRUD_ID}/movies/${id}`, {
//     method: "PUT",
//     body: JSON.stringify(json),
//     headers: {
//       "Content-Type": "application/json"
//     },
//   });
//   return NextResponse.json({ message: "updated" });
// }
