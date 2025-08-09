import Link from "next/link";
import Courses from "./courses";
import { fetchLatestVersion } from "./lib/actions";

export default async function Home() {
  const json = await fetchLatestVersion();

  return (
    <Courses json={json}/>
  );
}
