import connect from "@/lib/db";
import { NextResponse } from "next/server";
import Student from "@/lib/models/student";
// import { studentData } from "@/constants/studentData";

export async function GET() {
  try {
    await connect();
    const students = await Student.find();
    return new NextResponse(JSON.stringify(students), { status: 200 });
  } catch (error) {
    return new NextResponse("Couldn't fetch users.Please try again", {
      status: 500,
    });
  }
}
// export async function POST(request: Request) {
//   try {
//     await connect();
//     // const body = await request.json();
//     studentData.map(async (student) => {
//       const newStudent = new Student(student);
//       await newStudent.save();
//       console.log("student created");
//     });
//     // return new NextResponse(
//     //   JSON.stringify({ message: "all students Created" }),
//     //   {
//     //     status: 201,
//     //   }
//     // );
//   } catch (error) {
//     console.log("error", error);
//     return new NextResponse("Couldn't create user.Please try again", {
//       status: 500,
//     });
//   }
// }
