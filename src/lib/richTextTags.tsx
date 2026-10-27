import type { ReactNode } from "react";

export const richTextTags = {
  b: (chunks: ReactNode) => <b className="text-red-600">{chunks}</b>,
  strong: (chunks: ReactNode) => <strong>{chunks}</strong>,
  em: (chunks: ReactNode) => <em>{chunks}</em>,
  br: () => <br />,
};
