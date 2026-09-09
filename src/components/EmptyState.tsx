interface EmptyStateProps {
  title: string;
  body: string;
}

export function EmptyState({ title, body }: EmptyStateProps) {
  return (
    <div className="state-box" role="status">
      <p className="state-box__title">{title}</p>
      <p className="state-box__body">{body}</p>
    </div>
  );
}
