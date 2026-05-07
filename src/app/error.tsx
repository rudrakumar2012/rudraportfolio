"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <span className="technical-readout text-primary-neon">SYSTEM_ERROR</span>
      <h2 className="text-2xl font-display font-medium text-foreground">
        Something went wrong
      </h2>
      <p className="text-outline max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="bg-secondary text-surface px-6 py-3 rounded-sm font-display font-bold text-sm tracking-widest hover:brightness-110 active:scale-95 transition-all"
      >
        REINITIALIZE
      </button>
    </div>
  );
}