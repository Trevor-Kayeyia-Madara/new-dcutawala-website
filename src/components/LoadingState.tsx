export function LoadingState({ label = "Loading" }: { label?: string }) {
  return (
    <div className="state-box" role="status" aria-live="polite">
      <p className="state-box__title">{label}…</p>
      <p className="state-box__body">Please wait a moment.</p>
    </div>
  );
}
