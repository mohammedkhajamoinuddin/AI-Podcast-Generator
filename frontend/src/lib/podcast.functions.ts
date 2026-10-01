import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const PODCAST_WEBHOOK_URL =
  "https://workflow.ccbp.in/webhook/8ff1a750-5346-42bb-8662-4c7194be303e";

export const generatePodcast = createServerFn({ method: "POST" })
  .inputValidator((input) =>
    z
      .object({ text: z.string().trim().min(1, "Please enter a topic first").max(500) })
      .parse(input),
  )
  .handler(async ({ data }) => {
    let response: Response;
    try {
      response = await fetch(PODCAST_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: data.text }),
      });
    } catch {
      throw new Error("Could not reach the podcast service");
    }

    if (!response.ok) {
      throw new Error(`Podcast service responded with ${response.status}`);
    }

    const payload = z
      .object({ audioFile: z.string().url() })
      .safeParse(await response.json());

    if (!payload.success) {
      throw new Error("Unexpected response from the podcast service");
    }

    return { audioFile: payload.data.audioFile };
  });
