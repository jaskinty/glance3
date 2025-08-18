import Link from "next/link";

export default function Links() {
  return (
    <span className="flex flex-col gap-2">
      {[
        { txt: "🔑 Keys", href: "https://notion.so/Keys-2025-2527bfe2b9898085a86af74cfb586cbb" },
        { txt: "🔑 Candidates", href: "https://notion.so/Candidates-2527bfe2b98980cd8477c8c475c8b42d" },
        { txt: "🏂 Identity Board", href: "https://figma.com/design/dAfF6h3MP0vMI5tZOqqAIG" },
        { txt: "📅 Calender", href: "https://calendar.google.com/" },
        { txt: "⛹️‍♂️ Self-Care Protocol ", href: "https://notion.so/Self-Care-Protocol-1e17bfe2b989809abcfcfc0a45da218a" },
        { txt: "🎒 Belongings ", href: "https://notion.so/Belongings-1fa7bfe2b989809f8f7be1f9569b307b" },
        { txt: "📜 Version History", href: "/versions" },
        { txt: "🛒 Consumables ", href: "https://notion.so/1fa7bfe2b98980e49256ce19aa7820fe?v=1fa7bfe2b989808ea826000c12076e6d" },
        { txt: "💸 Expenses", href: "https://notion.so/Expenses-1fa7bfe2b98980558740d961eb11031d" },
        { txt: "🔒 Passwords", href: "https://vault.bitwarden.com" },
      ].map(({txt, href}, index) => (
        <div key={index}>
          <Link className="text-sm font-medium" href={href}>{txt}</Link>
        </div>
      ))}
    </span>
  );
}
