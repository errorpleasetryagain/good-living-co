import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-sm text-[var(--foreground-muted)]">
          © {new Date().getFullYear()} Good Living Co. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
