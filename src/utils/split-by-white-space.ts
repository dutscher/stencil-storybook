export default function splitByWhiteSpace(value: string): string[] {
  return value
    .split(/(\s+)/)
    .map((s) => s.trim())
    .filter((s) => s);
}
