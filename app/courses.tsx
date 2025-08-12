'use client';

import { useEffect, useState } from "react";
import { saveVersion } from "@/app/lib/actions";
import Links from "./links";

export default function Courses({ json, readOnly }: { json: [string, string][], readOnly: boolean }) {
  const [state, setState] = useState(json);
  const [isSaving, setIsSaving] = useState(false);
  const [isUnsaved, setIsUnsaved] = useState(false);

  function onContentChange(i: number, j: number, content: string) {
    setIsUnsaved(true);
    setState(state.map((course, index) => {
      if (i !== index) return course;
      return j === 0 ? [content, course[1]] : [course[0], content];
    }));
  }

  function onInsertAfter(index: number) {
    setIsUnsaved(true);
    setState([...state.slice(0, index + 1), ['Course', 'Aa'], ...state.slice(index + 1)]);
  }

  function onDelete(index: number) {
    setIsUnsaved(true);
    setState(state.filter((_, i) => i !== index));
  }

  function onSave() {
    setIsSaving(true);
    saveVersion(state).finally(() => {
      setIsSaving(false);
      setIsUnsaved(false);
    });
  }

  useEffect(() => {
    const textareas = window.document.body.querySelectorAll('textarea');
    textareas.forEach(el => {
      el.style.height = `${el.scrollHeight}px`;
    });
  });

  return (
    <main className="scroll-container">
      <section>
        <Links />
      </section>
      {state.map((course, index) => {
          const [title, content] = course;
          return (
            <section key={index}>
              <div>
                <div className="flex gap-2">
                  <input className="px-2 grow w-2xs" value={title} onChange={e => onContentChange(index, 0, e.target.value)} readOnly={readOnly}/>
                  <button disabled={readOnly} onClick={() => onDelete(index)}>🗑️</button>
                  <button disabled={readOnly} onClick={() => onInsertAfter(index)}>➕</button>
                </div>
                <textarea value={content} onChange={e => onContentChange(index, 1, e.target.value)} readOnly={readOnly}></textarea>
              </div>
            </section>
          );
        })}
        {isUnsaved && <button onClick={onSave} disabled={isSaving} style={{
          position: 'fixed',
          bottom: 40,
          right: 40,
          borderRadius: 5,
          padding: 10,
          background: '#04a',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}>
          {isSaving ? 'Saving...' : 'Save changes'}
        </button>}
    </main>
  );

  return (
    <main style={{ width: '100vw', overflow: 'scroll' }}>
      <div className="flex gap-2 p-2 items-start pr-[80vw]" style={{ width: 'max-content' }}>
        <div className="w-2xs">
          <Links />
        </div>
        {state.map((course, index) => {
          const [title, content] = course;
          return (
            <section key={index} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input className="px-2 grow w-2xs" value={title} onChange={e => onContentChange(index, 0, e.target.value)} readOnly={readOnly}/>
                <button disabled={readOnly} onClick={() => onDelete(index)}>🗑️</button>
                <button disabled={readOnly} onClick={() => onInsertAfter(index)}>➕</button>
              </div>
              <textarea className="p-2" value={content} onChange={e => onContentChange(index, 1, e.target.value)} readOnly={readOnly}/>
            </section>
          );
        })}
        {isUnsaved && <button onClick={onSave} disabled={isSaving} style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          borderRadius: 5,
          padding: 10,
          background: '#04a',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}>
          {isSaving ? 'Saving...' : 'Save changes'}
        </button>}
      </div>
    </main>
  );
}
