import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { StudentDataType } from "@/constants/studentData";
import { ReactNode } from "react";
import { Avatar } from "./ui/avatar";
import UserAvatar from "./UserAvatar";

export function StudentDetails(props: { student: StudentDataType }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full">View Details</Button>
        {/* {children} */}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <UserAvatar
            className="h-20 w-20 object-contain mx-auto"
            fallback={`${props.student.firstName[0]}${props.student.firstName[0]}`}
            imageUrl={props.student.image}
          />
          <AlertDialogTitle>
            {props.student.firstName} {props.student.middleName}{" "}
            {props.student.lastName}
          </AlertDialogTitle>
          <AlertDialogDescription>
            <p>Gender: {props.student.gender}</p>
            <p>Grade: {props.student.grade}</p>
            <p>
              Date of Birth:{" "}
              {new Date(props.student.dateOfBirth).toLocaleDateString(
                "default",
                { dateStyle: "full" }
              )}
            </p>
            <p></p>
          </AlertDialogDescription>
          <AlertDialogTitle>Parent&apos;s Details</AlertDialogTitle>
          <AlertDialogDescription>
            <p>
              Name: {props.student.parent.firstName}{" "}
              {props.student.parent.middleName} {props.student.parent.lastName}
            </p>
            <p>Phone Number: +{props.student.parent.phoneNumber}</p>
            <p></p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel></AlertDialogCancel> */}
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
