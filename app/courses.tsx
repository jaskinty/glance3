'use client';

import { useEffect, useState } from "react";
import { saveVersion } from "@/app/lib/actions";
import Link from "next/link";

export default function Courses({ json }: { json: [string, string][] }) {
  const [state, setState] = useState(json);
  const [isSaving, setIsSaving] = useState(false);

  function onContentChange(i: number, j: number, content: string) {
    setState(state.map((course, index) => {
      if (i !== index) return course;
      return j === 0 ? [content, course[1]] : [course[0], content];
    }));
  }

  function onInsertAfter(index: number) {
    setState([...state.slice(0, index + 1), ['Course', 'Aa'], ...state.slice(index + 1)]);
  }

  function onDelete(index: number) {
    setState(state.filter((_, i) => i !== index));
  }

  function onSave() {
    setIsSaving(true);
    saveVersion(state).finally(() => setIsSaving(false));
  }

  useEffect(() => {
    const textareas = window.document.body.querySelectorAll('textarea');
    textareas.forEach(el => {
      el.style.height = `${el.scrollHeight}px`;
    });
  });


  return (
    <main style={{ width: '100vw', overflow: 'scroll' }}>
      <div className="flex gap-2 p-2" style={{ width: 'max-content' }}>
        <div className="w-2xs">
          <section>
            <Link href="/versions">Version History ↗️</Link>
          </section>
        </div>
        {state.map((course, index) => {
          const [title, content] = course;
          return (
            <section key={index} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input className="px-2 grow w-2xs" value={title} onChange={e => onContentChange(index, 0, e.target.value)}/>
                <button onClick={() => onInsertAfter(index)}>➕</button>
                <button onClick={() => onDelete(index)}>🗑️</button>
              </div>
              <textarea className="p-2" value={content} onChange={e => onContentChange(index, 1, e.target.value)}/>
            </section>
          );
        })}
        <button onClick={onSave} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save changes'}
        </button>
      </div>
    </main>
  );
}
