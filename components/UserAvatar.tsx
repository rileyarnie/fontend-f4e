import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

function UserAvatar(props: {
  imageUrl: string;
  fallback: string;
  className: string;
}) {
  return (
    <Avatar className={props.className}>
      <AvatarImage src={props.imageUrl} />
      <AvatarFallback>{props.fallback}</AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
