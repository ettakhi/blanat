export const getUsername = (name: string | null | undefined) =>
  name?.split(" ")[0]?.toLowerCase();

export const getInitials = (name: string | null | undefined) => {
  if (!name) return "";
  const parts = name.split(" ");
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  return parts[0].charAt(0).toUpperCase() + parts[1].charAt(0).toUpperCase();
};
