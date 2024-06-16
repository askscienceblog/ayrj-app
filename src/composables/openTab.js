export const openTab = function (href) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.click();
};
