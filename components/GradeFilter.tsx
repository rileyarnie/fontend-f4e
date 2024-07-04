"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const grades = [1, 2, 3, 4, 5, 6, 7, 8];

export default function GradeFilter() {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleGradeChange = (e: string) => {
    toggleOpen();
    router.refresh();
  };

  return (
    <Select
      open={isOpen}
      onOpenChange={toggleOpen}
      onValueChange={(e) => handleGradeChange(e)}
    >
      <SelectTrigger className="w-[180px] z-10">
        <SelectValue placeholder="Select a Grade" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="flex flex-col">
          <Link className="p-2" href={"/"}>
            Show All
          </Link>
          {grades.map((grade) => (
            <Link key={grade} className="p-2" href={`/?grade=${grade}&page=1`}>
              Class {grade}
            </Link>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
