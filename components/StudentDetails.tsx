import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { StudentDataType } from "@/constants/studentData";
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
          <AlertDialogTitle className="text-center">
            {props.student.firstName} {props.student.middleName}{" "}
            {props.student.lastName}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Gender: {props.student.gender}
            <br />
            Grade: {props.student.grade}
            <br />
            Date of Birth:{" "}
            {new Date(props.student.dateOfBirth).toLocaleDateString("default", {
              dateStyle: "full",
            })}
          </AlertDialogDescription>
          <AlertDialogTitle className="text-center">
            Parent&apos;s Details
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Name: {props.student.parent.firstName}{" "}
            {props.student.parent.middleName} {props.student.parent.lastName}
            <br />
            Phone Number: +{props.student.parent.phoneNumber}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mx-auto">
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
