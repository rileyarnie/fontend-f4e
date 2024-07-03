import { StudentDataType } from "@/constants/studentData";
import React from "react";
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

const StudentCard = (props: { student: StudentDataType }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex align-middle items-center space-x-2">
          <UserAvatar
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
          <p>Date of Birth: {props.student.dateOfBirth}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default StudentCard;
