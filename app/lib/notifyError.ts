"use server";

export async function notifyError(message: any) {
  if (!process.env.DISCORD_WEBHOOK_URL) {
    return false;
  }

  const teamsResponse = await fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: message }),
  });

  if (!teamsResponse.ok) {
    return false;
  }

  return true;
}
