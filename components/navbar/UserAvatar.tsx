import { cn } from "@/lib/utils";
import Image from "next/image";
interface UserAvatarProps {
  avatarUrl: string | null | undefined;
  size?: number;
  className?: string;
}
export default function UserAvatar({
  avatarUrl,
  size,
  className,
}: UserAvatarProps) {
  return (
    <Image
      src={
        avatarUrl ||
        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
      }
      alt="User avatar"
      width={size ?? 48}
      height={size ?? 48}
      className={cn(
        "aspect-square h-fit flex-none rounded-full bg-secondary object-cover",
        className
      )}
    />
  );
}
