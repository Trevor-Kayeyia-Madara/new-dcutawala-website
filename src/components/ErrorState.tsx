interface ErrorStateProps {
  title?: string;
  body: string;
}

export function ErrorState({ title = "Something went wrong", body }: ErrorStateProps) {
  return (
    <div className="state-box" role="alert">
      <p className="state-box__title">{title}</p>
      <p className="state-box__body">{body}</p>
    </div>
  );
}
