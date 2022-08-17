import { useEffect, useRef } from "react";

export const useAutoResize = (value) => {
  const ref = useRef(null);

  useEffect(() => {
    //現在参照している要素を取得
    const element = ref.current;
    if (!element) {
      return;
    }
    element.style.height = "auto";

    //element.scrollHeightあふれてしまう要素を含めた高さ
    //element.style.height現在参照要素の高さ
    element.style.height = `${element.scrollHeight}px`;
    console.log(element.style.height);
  }, [value]);
  return ref;
};
