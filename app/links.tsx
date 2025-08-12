import Link from "next/link";

export default function Links() {
  return (
    <span className="flex flex-col gap-3">
      {[
        { txt: "🔑 Keys ↗️", href: "" },
        { txt: "💭 Potential Keys ↗️", href: "" },
        { txt: "📅 Calender ↗️", href: "" },
        { txt: "🏂 Identity Board ↗️", href: "" },
        { txt: "⛹️‍♂️ Self-Care Protocol  ↗️", href: "" },
        { txt: "🛒 Consumables  ↗️", href: "" },
        { txt: "🎒 Belongings  ↗️", href: "" },
        { txt: "💸 Expenses ↗️", href: "" },
        { txt: "📜 Version History ↗️", href: "/versions" },
        { txt: "ℹ️ About this tool ↗️", href: "" },
      ].map(({txt, href}, index) => (
        <div key={index}>
          <Link href={href}>{txt}</Link>
        </div>
      ))}
    </span>
  );
}
