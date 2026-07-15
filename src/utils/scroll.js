export function isNearBottom(element, offset = 48) {
  if (!element) return true;

  return element.scrollHeight - element.scrollTop - element.clientHeight <= offset;
}
