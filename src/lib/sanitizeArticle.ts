import sanitizeHtml from "sanitize-html";

// API content is untrusted. Preserve article formatting, not executable markup.
export function sanitizeArticle(content: unknown): string {
  return sanitizeHtml(typeof content === "string" ? content : "", {
    allowedTags: [
      "p", "br", "h2", "h3", "h4", "h5", "h6", "strong", "b", "em", "i",
      "u", "s", "blockquote", "ul", "ol", "li", "a", "img", "figure",
      "figcaption", "table", "thead", "tbody", "tr", "th", "td", "hr", "pre", "code",
    ],
    allowedAttributes: {
      a: ["href", "title"],
      img: ["src", "alt", "title", "width", "height"],
      th: ["colspan", "rowspan", "scope"],
      td: ["colspan", "rowspan"],
    },
    allowedSchemes: ["https", "http", "mailto"],
    allowedSchemesByTag: { img: ["https", "http"] },
    allowProtocolRelative: false,
  });
}
