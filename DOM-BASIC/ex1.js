function highlightElementsByClass(className, color) {
  if (typeof className !== "string" || typeof color !== "string") {
    return;
  }

  const elements = document.getElementsByClassName(className);
  for (let element of elements) {
    element.style.backgroundColor = color;
  }
}
highlightElementsByClass("highlight", "lightblue"); // class "highlight" thành màu lightblue
highlightElementsByClass("note", "yellow"); // class "note" thành màu yellow
highlightElementsByClass("missing-class", "pink"); // Không có class "missing-class", không có gì thay đổi
highlightElementsByClass(123, "green"); // className không phải là chuỗi, không có gì thay đổi
