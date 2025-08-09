import Link from "next/link";
import { fetchAllVersions } from "../lib/actions";

export default async function App() {
  const versions = await fetchAllVersions();

  return (
    <div>
      {versions.map(({ id, created_at }) => (
        <div key={id} >
          <Link href={`/versions/${id}`}>{created_at}</Link>
        </div>
        ) )}
    </div>
  );
}
