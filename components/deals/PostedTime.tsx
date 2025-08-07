import { timeAgo } from "@/lib/utils/date";

const PostedTime = ({ postedDate }: { postedDate: Date }) => {
  const formatedDate = timeAgo(postedDate, {
    locale: "en",
    // relativeDays: 0, // Show relative time for dates within the last 7 days
  });
  return (
    <div className="text-sm text-gray-800 ms-auto">
      <small className="bg-gray-100 border rounded-lg px-2 py-1.5">
        Posted {formatedDate}
      </small>
    </div>
  );
};

export default PostedTime;
