const SKIP_LINK_STYLE =
  "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 " +
  "focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-on-brand";

export function SkipLink() {
  return (
    <a href="#conteudo" className={SKIP_LINK_STYLE}>
      Ir para o conteúdo
    </a>
  );
}
