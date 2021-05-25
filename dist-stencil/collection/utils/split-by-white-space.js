export default function splitByWhiteSpace(value) {
  return value
    .split(/(\s+)/)
    .map((s) => s.trim())
    .filter((s) => s);
}
