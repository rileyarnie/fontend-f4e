import StudentCard from "@/components/StudentCard";
import { studentData } from "@/constants/studentData";

async function fetchStudents() {
  const res = await fetch("http://localhost:3000/api/students");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  // const users = await fetchStudents();

  const users = studentData;
  console.log("users", users);

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {studentData.map((student) => {
        return <StudentCard key={student.firstName} student={student} />;
      })}
    </main>
  );
}
