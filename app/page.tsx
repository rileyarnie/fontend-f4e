import StudentCard from "@/components/StudentCard";
import GradeFilter from "@/components/GradeFilter";
import { StudentDataType } from "@/constants/studentData";

export async function fetchStudents(gradeFilter?: string) {
  // let  =
  const res = await fetch(
    `http://localhost:3000/api/students?` +
      new URLSearchParams({ grade: gradeFilter || "" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home(context: any) {
  const students = await fetchStudents(context.searchParams.grade);

  return (
    <>
      <div className="">
        <GradeFilter />
      </div>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student: StudentDataType) => {
          return <StudentCard key={student.firstName} student={student} />;
        })}
      </main>
    </>
  );
}
