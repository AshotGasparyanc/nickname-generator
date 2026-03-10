type Props = {
  name: string;
  copied: boolean;
  onClick: () => void;
};

export default function NicknameCard({ name, copied, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`group rounded-2xl border px-4 py-4 text-left transition-all duration-200 ${
        copied
          ? "border-emerald-500/50 bg-emerald-500/10"
          : "border-zinc-800 bg-zinc-900 hover:border-violet-500/40 hover:bg-violet-500/5"
      }`}
    >
      <div className="text-lg font-semibold">{name}</div>
      <div
        className={`mt-1 text-sm transition-colors ${
          copied
            ? "text-emerald-400"
            : "text-zinc-500 group-hover:text-zinc-400"
        }`}
      >
        {copied ? "✓ Copied!" : "Tap to copy"}
      </div>
    </button>
  );
}
