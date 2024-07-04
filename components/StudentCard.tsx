import React from "react";
import { StudentDataType } from "@/constants/studentData";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import UserAvatar from "./UserAvatar";
import { StudentDetails } from "./StudentDetails";

const StudentCard = (props: { student: StudentDataType }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex align-middle items-center space-x-2">
          <UserAvatar
            className="h-12 w-12 object-contain"
            fallback={`${props.student.firstName[0]}${props.student.firstName[0]}`}
            imageUrl={props.student.image}
          />
          <CardTitle className="text-2xl">{`${props.student.firstName} ${props.student.lastName}`}</CardTitle>
        </div>
        <CardDescription>Grade: {props.student.grade}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground flex flex-col">
          <p>Gender: {props.student.gender}</p>
          <p>
            Date of Birth:{" "}
            {new Date(props.student.dateOfBirth).toLocaleDateString()}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <StudentDetails student={props.student} />
      </CardFooter>
    </Card>
  );
};

export default StudentCard;
