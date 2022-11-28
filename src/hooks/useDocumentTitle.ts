// custom Hook
// hook rules
// 사용자 정의 Hook은 이름이 use로 시작하는 자바스크립트 함수입니다.

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
