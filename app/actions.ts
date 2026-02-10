"use server";

export async function toggleStatus(current: boolean) {
  // pretend server delay
  await new Promise((r) => setTimeout(r, 500));
  return !current;
}
