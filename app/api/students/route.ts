import connect from "@/lib/db";
import { NextResponse } from "next/server";
import Student from "@/lib/models/student";
// import { studentData } from "@/constants/studentData";

type StudentFilterType = {
  grade?: string;
};

export async function GET(request: Request) {
  try {
    await connect();
    const { searchParams } = new URL(request.url);

    //get the grade from request params to allow filtering from the database by grade
    const gradeFilter = searchParams.get("grade") as string;
    let studentFilter: StudentFilterType = {};

    //get page limit and count in from database
    const page = parseInt((searchParams.get("page") as string) || "1");
    const limit = parseInt((searchParams.get("limit") as string) || "10");

    //determine how many entries to skip per page i.e if page = 3, skip 20 entries and fetch from 21-30
    const skip = (page - 1) * limit;

    if (gradeFilter || parseInt(gradeFilter) > 0 || parseInt(gradeFilter) < 9) {
      studentFilter.grade = `CLASS ${gradeFilter}`;
    }

    const students = await Student.find(studentFilter).skip(skip).limit(limit);
    const numberOfStudents = await Student.find(studentFilter).countDocuments();
    const totalPages = Math.ceil(numberOfStudents / limit);

    return new NextResponse(
      JSON.stringify({ students, totalEntries: numberOfStudents, totalPages }),
      { status: 200 }
    );
  } catch (error) {
    console.log("error", error);
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
