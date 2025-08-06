import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const User = async () => {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div className="flex items-center gap-1">
      <Avatar>
        <AvatarImage src={session.user.image || ""} alt="@ettakhi" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="text-gray-700">{session.user.name}</span>
    </div>
  );
};

export default User;
