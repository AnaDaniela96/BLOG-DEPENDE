import { useEffect, useMemo } from "react";
import DOMPurify from "dompurify";
import { marked } from "marked";

export default function Markdown({ source = "" }) {
  // Opcional: optimiza rendimiento de marked
  marked.setOptions({
    breaks: true,      // saltos de línea como <br>
    mangle: false,     // no ofuscar emails
    headerIds: true,   // ids en headings
  });

  // Añade target="_blank" a <a> y rel seguro
  useEffect(() => {
    const hook = (node) => {
      if (node.tagName === "A") {
        node.setAttribute("target", "_blank");
        node.setAttribute("rel", "noopener noreferrer");
      }
    };
    DOMPurify.addHook("afterSanitizeAttributes", hook);
    return () => {
      // Limpia el hook para evitar duplicarlo en HMR
      DOMPurify.removeAllHooks();
    };
  }, []);

  const html = useMemo(() => {
    const raw = marked.parse(source || "");
    const clean = DOMPurify.sanitize(raw, { USE_PROFILES: { html: true } });
    return clean;
  }, [source]);

  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
