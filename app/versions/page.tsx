import Link from "next/link";
import { fetchAllVersions } from "../lib/actions";

export default async function App() {
  const versions = await fetchAllVersions();

  return (
    <div className="p-4">
      <h1 className="font-bold py-4">Version History</h1>
      <div className="flex flex-col gap-2 items-start">
        {versions.map(({ id, created_at }) => {
          const date = new Date(created_at);
          const formattedTime = new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }).format(date);
          return (
            <div key={id} className="version">
              <Link href={`/versions/${id}`}>{formattedTime}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
