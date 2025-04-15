"use client";

import { useCurrentUserImage } from "@/hooks/use-current-user-image";
import { useCurrentUserName } from "@/hooks/use-current-user-name";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
export const CurrentUserAvatar = ({ className }: { className?: string }) => {
  const profileImage = useCurrentUserImage();
  const name = useCurrentUserName();
  const initials = name
    ?.split(" ")
    ?.map((word) => word[0])
    ?.join("")
    ?.toUpperCase();

  return (
    <Avatar className={cn("size-5", className)}>
      {profileImage && <AvatarImage src={profileImage} alt={initials} />}
      <AvatarFallback className="border border-accent bg-accent/20 text-[10px] text-foreground">
        {initials}
      </AvatarFallback>
    </Avatar>
  );
};
