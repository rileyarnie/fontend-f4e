import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

function UserAvatar(props: { imageUrl: string; fallback: string }) {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={props.imageUrl} />
      <AvatarFallback>{props.fallback}</AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
