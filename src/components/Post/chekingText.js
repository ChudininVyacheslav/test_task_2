export function checkingText(text) {
  return text.body.length > 60 ? text.body.substring(0, 58) + "..." : text.body;
}
