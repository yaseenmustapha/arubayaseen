export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}