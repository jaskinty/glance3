'use client';

import { useState } from "react";
import { saveVersion } from "@/app/lib/actions";

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

  return (
    <div style={{ display: 'flex', gap: 10 }}>
      {state.map((course, index) => {
        const [title, content] = course;
        return (
          <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
            <input value={title} onChange={e => onContentChange(index, 0, e.target.value)}/>
            <textarea value={content} onChange={e => onContentChange(index, 1, e.target.value)}/>
            <button onClick={() => onInsertAfter(index)}>insert after</button>
            <button onClick={() => onDelete(index)}>delete</button>
          </div>
        );
      })}
      <button onClick={onSave} disabled={isSaving}>
        {isSaving ? 'saving...' : 'save changes'}
      </button>
    </div>
  );
}
