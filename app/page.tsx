import Courses from "./courses";
import { fetchLatestVersion } from "./lib/actions";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const json = await fetchLatestVersion();

  return (
    <Courses json={json} readOnly={false} />
  );
}
