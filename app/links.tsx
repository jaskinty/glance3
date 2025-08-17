import Link from "next/link";

export default function Links() {
  return (
    <span className="flex flex-col gap-3">
      {[
        { txt: "🔑 Keys ↗️", href: "" },
        { txt: "🏂 Identity Board ↗️", href: "" },
        { txt: "📅 Calender ↗️", href: "" },
        { txt: "⛹️‍♂️ Self-Care Protocol  ↗️", href: "" },
        { txt: "🎒 Belongings  ↗️", href: "" },
        { txt: "📜 Version History ↗️", href: "/versions" },
        { txt: "🛒 Consumables  ↗️", href: "" },
        { txt: "💸 Expenses ↗️", href: "" },
        { txt: "🔒 Passwords ↗️", href: "" },
      ].map(({txt, href}, index) => (
        <div key={index}>
          <Link href={href}>{txt}</Link>
        </div>
      ))}
    </span>
  );
}
