import { fetchSpecificVersion } from "../../lib/actions"

export default async function Version({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params
  const json = await fetchSpecificVersion(id)
 
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      {json.map((course, index) => {
        const [title, content] = course;
        return (
          <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
            <input defaultValue={title} readOnly />
            <textarea defaultValue={content} readOnly />
          </div>
        );
      })}
    </div>
  )
}
