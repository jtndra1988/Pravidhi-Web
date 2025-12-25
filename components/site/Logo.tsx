import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2" aria-label="ZypoSoft Home">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[rgba(var(--accent),0.12)] ring-1 ring-[rgba(var(--accent),0.25)]">
        <span className="h-3 w-3 rounded-full bg-[rgba(var(--accent),0.85)]" />
      </span>
      <span className="text-sm font-semibold tracking-tight">
        ZypoSoft <span className="text-[rgba(var(--fg),0.72)]"></span>
      </span>
    </Link>
  );
}
