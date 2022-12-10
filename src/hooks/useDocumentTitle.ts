//custom Hook

import { useEffect } from "react";

const ORIGINAL_DOCUMENT_TITLE = document.title;

type UseDocumentTitle = string | ((initialDocumentTitle: string) => void);

export function useDocumentTitle(newDocumentTitle: UseDocumentTitle): void {
  useEffect(() => {
    if (typeof newDocumentTitle === "string") {
      document.title = newDocumentTitle;
    } else {
      newDocumentTitle(ORIGINAL_DOCUMENT_TITLE);
    }
  });
}
