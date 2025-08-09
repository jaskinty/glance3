import Courses from "@/app/courses";
import { fetchSpecificVersion } from "../../lib/actions"

export default async function Version({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params
  const json = await fetchSpecificVersion(id)
 
  return (
    <Courses json={json} readOnly={true} />
  );
}
