export default function RichParagraph({ block }) {
  if (block.parts?.length) {
    return (
      <p className="text-[#1F4E4A] leading-relaxed">
        {block.parts.map((part, index) => {
          if (part.type === "link") {
            return (
              <a
                key={`${part.text}-${index}`}
                href={part.url}
                target={part.external ? "_blank" : undefined}
                rel={part.external ? "noopener noreferrer" : undefined}
                className="underline underline-offset-4 font-medium hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E4A] focus-visible:ring-offset-2 rounded-sm"
              >
                {part.text}
              </a>
            );
          }

          return <span key={`${part.text}-${index}`}>{part.text}</span>;
        })}
      </p>
    );
  }

  return <p className="text-[#1F4E4A] leading-relaxed">{block.text}</p>;
}
