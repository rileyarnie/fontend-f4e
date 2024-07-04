import StudentCard from "@/components/StudentCard";
import GradeFilter from "@/components/GradeFilter";
import { StudentDataType } from "@/constants/studentData";
import StudentPagination from "@/components/StudentPagination";

export async function fetchStudents(gradeFilter?: string, page?: string) {
  let Params = { gradeFilter: gradeFilter || "", page: page || "1" };
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
  console.log("context.searchParams", context);
  const data = await fetchStudents(
    context.searchParams.grade,
    context.searchParams.page
  );

  return (
    <>
      <div className="">
        <GradeFilter />
      </div>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.students?.map((student: StudentDataType) => {
          return <StudentCard key={student.firstName} student={student} />;
        })}
      </main>
      <StudentPagination
        currentPage={parseInt(context.searchParams.page)}
        totalPages={data.totalPages}
      />
    </>
  );
}
