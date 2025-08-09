import Link from "next/link";
import Courses from "./courses";
import { fetchLatestVersion } from "./lib/actions";

export default async function Home() {
  const json = await fetchLatestVersion();

  return (
    <main style={{display: 'flex', gap: 10 }}>
      <Link href="/versions">Version History</Link>
      <Courses json={json}/>
    </main>
  );
}
