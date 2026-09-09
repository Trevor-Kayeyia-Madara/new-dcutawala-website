interface ScriptureBlockProps {
  text: string;
  reference: string;
}

export function ScriptureBlock({ text, reference }: ScriptureBlockProps) {
  return (
    <blockquote className="scripture">
      “{text}”
      <cite>{reference}</cite>
    </blockquote>
  );
}
