import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { generatePodcast } from "@/lib/podcast.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pastelcast — Create Your Podcast" },
      {
        name: "description",
        content:
          "Type a topic and generate your own podcast episode in seconds with Pastelcast.",
      },
      { property: "og:title", content: "Pastelcast — Create Your Podcast" },
      {
        property: "og:description",
        content: "Type a topic and generate your own podcast episode in seconds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Status = "idle" | "loading" | "ready" | "error";

function Index() {
  const generateFn = useServerFn(generatePodcast);

  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const isLoading = status === "loading";

  const handleGenerate = async () => {
    if (!topic.trim() || isLoading) return;
    setStatus("loading");
    try {
      const result = await generateFn({ data: { text: topic.trim() } });
      setAudioUrl(result.audioFile);
      setStatus("ready");
      setTopic("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-pastel-gradient flex min-h-screen items-center justify-center px-4 py-10 sm:py-16">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="animate-float-soft mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-card text-3xl shadow-soft">
            🎙️
          </div>
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Pastelcast
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Tell us your topic and we'll make a podcast for you
          </p>
        </div>

        {/* Card */}
        <div className="rounded-4xl border bg-card p-6 shadow-soft sm:p-8">
          {/* Input */}
          <label htmlFor="topic" className="mb-2 block text-sm font-semibold text-foreground">
            Podcast topic
          </label>
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") void handleGenerate();
            }}
            placeholder="Type podcast topic here..."
            disabled={isLoading}
            className="w-full rounded-2xl border border-input bg-background px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
          />

          {/* Generate button */}
          <button
            type="button"
            onClick={() => void handleGenerate()}
            disabled={isLoading || !topic.trim()}
            className="mt-4 w-full rounded-2xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-soft transition-all duration-300 hover:bg-accent hover:text-accent-foreground active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:text-lg"
          >
            🔊 Generate Podcast
          </button>

          {/* Player area */}
          <div className="mt-6 rounded-3xl bg-muted p-6 text-center">
            {status === "idle" && (
              <>
                <div className="mb-3 text-4xl">🎧</div>
                <p className="text-sm font-medium text-muted-foreground">
                  Podcast will appear here.
                </p>
              </>
            )}

            {status === "loading" && (
              <>
                <div className="dot-pulse mb-4 flex items-center justify-center gap-2">
                  <span />
                  <span />
                  <span />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  Creating podcast... please wait!
                </p>
              </>
            )}

            {status === "ready" && audioUrl && (
              <>
                <p className="mb-4 text-base font-bold text-foreground">
                  🔊 Podcast is ready! Click play to listen
                </p>
                {/* eslint-disable-next-line jsx-a11y/media-has-caption -- generated podcast audio */}
                <audio controls src={audioUrl} className="w-full">
                  Your browser does not support the audio element.
                </audio>
              </>
            )}

            {status === "error" && (
              <>
                <div className="mb-3 text-4xl">😟</div>
                <p className="text-sm font-semibold text-destructive">
                  Oops! Something went wrong. Please try again
                </p>
              </>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Made with 💜 for podcast dreamers
        </p>
      </div>
    </main>
  );
}
