import { cn } from "@/lib/utils";
import { expiredFormatDate, isExpired, timeAgo } from "@/lib/utils/date";

const PostedTime = ({
  postedDate,
  expireAt,
}: {
  postedDate: Date;
  expireAt: Date | undefined | null;
}) => {
  const expired = isExpired(expireAt);

  if (expired) {
    return (
      <div className="text-sm text-red-500 ms-auto">
        <small className="bg-red-100 border border-red-200 rounded-lg px-2 py-1.5">
          Expired
        </small>
      </div>
    );
  }

  const formatedDate = timeAgo(postedDate, {
    locale: "en",
    // relativeDays: 0, // Show relative time for dates within the last 7 days
  });

  const expiredDate = expiredFormatDate(expireAt, {
    locale: "en",
    useRelativeTime: true,
    expiredText: "Expires in",
  });

  return (
    <div className="text-sm  ms-auto">
      <small
        className={cn(" borders rounded-lg px-2 py-1.5", {
          "text-red-800 bg-red-100": expireAt,
          "text-gray-800 bg-gray-100": !expireAt,
        })}
      >
        {expireAt ? expiredDate : `Posted ${formatedDate}`}
      </small>
    </div>
  );
};

export default PostedTime;
