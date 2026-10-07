# AI Podcast Generator Platform

An AI-powered podcast generation platform that transforms user-provided topics into professionally narrated podcast-style audio episodes using Google AI Studio, Google Gemini, Murf AI, n8n, and a browser-based frontend application.

## Live Demo

🔗 https://bubble-beat-booth.lovable.app

---

## Overview

This project automates podcast creation using Generative AI and Text-to-Speech technologies.

The project started as an n8n-based workflow that generated podcast audio through a chat interface.

It was later enhanced with a browser-based frontend application built using Lovable and integrated with the workflow using webhooks, transforming the solution into a complete AI-powered podcast generation platform.

Users can now:

- Enter a podcast topic through a web interface
- Trigger workflow execution through a webhook
- Generate AI-created podcast scripts
- Convert scripts into natural-sounding speech
- Listen to generated podcasts directly in the browser

The result is a fully automated end-to-end podcast generation platform.

---

## Screenshots

### Workflow Overview — Version 1

![Workflow Overview - Version 1](screenshots/workflow-v1.png)

The original n8n workflow orchestrates the podcast generation pipeline using a Chat Trigger, Google Gemini, Murf AI, and audio download functionality.

---

### Generated Podcast Script

![Generated Podcast Script - Version 1](screenshots/chat-generated-script-v1.png)

Google Gemini generates the podcast script based on the topic provided through the chat interface.

---

### Workflow Overview — Version 2

![Workflow Overview - Version 2](screenshots/workflow-v2.png)

The enhanced workflow uses a Webhook Trigger, frontend integration, Google Gemini, Murf AI, audio download, and Respond to Webhook architecture.

---

### Public Web Application

![AI Podcast Generator Frontend](screenshots/frontend-ui-v2.png)

The browser-based frontend application allows users to generate AI-powered podcasts without directly accessing n8n.

---

## Major Enhancement (Version 2)

### Version 1

The original implementation operated through the n8n Chat Trigger interface.

Users had to interact directly with the workflow to generate podcasts.

### Version 2

The project was significantly enhanced by introducing:

- Browser-based frontend application
- Webhook-based workflow triggering
- Frontend-to-n8n integration
- Browser audio playback
- Automated response handling
- Public deployment

This transformed the solution from an internal workflow automation into a publicly accessible AI-powered application.

Users no longer need direct access to n8n to generate podcasts.

---

## Problem Statement

Creating podcast content traditionally involves:

- Researching a topic
- Writing a script
- Recording narration
- Editing audio
- Exporting final podcast files

This process can take hours for a single episode.

This project automates the workflow using AI-powered content generation and text-to-speech synthesis, significantly reducing content creation effort and production time.

---

## Key Features

### Version 1 Features

- Chat-based topic input
- AI-generated podcast script creation
- Google AI Studio integration
- Google Gemini integration
- Murf AI text-to-speech conversion
- Natural-sounding podcast narration
- Automated audio generation
- Automated audio download
- End-to-end workflow automation

### Version 2 Features

- Public web application
- Responsive user interface
- Webhook-based workflow triggering
- Frontend-to-workflow integration
- Browser audio playback
- Real-time request handling
- Public deployment
- Improved user experience

---

## Project Evolution

### Version 1

```text
User
  ↓
Chat Trigger
  ↓
Google Gemini
  ↓
Murf AI
  ↓
Generated Audio
```

### Version 2

```text
User
  ↓
Frontend Application
  ↓
Webhook
  ↓
n8n Workflow
  ↓
Google Gemini
  ↓
Murf AI
  ↓
Respond to Webhook
  ↓
Browser Audio Player
```

---

## Architecture (Version 2)

```text
User
  ↓
Frontend Application (Lovable)
  ↓
Webhook
  ↓
n8n Workflow
  ↓
Google Gemini
Podcast Script Generation
  ↓
Murf AI
Text-to-Speech Generation
  ↓
Generated Audio
  ↓
Respond to Webhook
  ↓
Browser Audio Player
```

---

## Detailed Technical Architecture

```text
┌──────────────────────────────┐
│ Browser User                 │
└─────────────┬────────────────┘
              │
              ▼
┌──────────────────────────────┐
│ Lovable Frontend             │
│ Podcast UI                   │
└─────────────┬────────────────┘
              │
              ▼
┌──────────────────────────────┐
│ Webhook Trigger              │
└─────────────┬────────────────┘
              │
              ▼
┌──────────────────────────────┐
│ Google Gemini                │
│ Podcast Script Generator     │
└─────────────┬────────────────┘
              │
              ▼
┌──────────────────────────────┐
│ Murf AI API                  │
│ Text-to-Speech Generation    │
└─────────────┬────────────────┘
              │
              ▼
┌──────────────────────────────┐
│ Audio Downloader             │
└─────────────┬────────────────┘
              │
              ▼
┌──────────────────────────────┐
│ Respond to Webhook           │
└─────────────┬────────────────┘
              │
              ▼
┌──────────────────────────────┐
│ Browser Audio Player         │
└──────────────────────────────┘
```

---

## Technologies Used

### Artificial Intelligence

- Google AI Studio
- Google Gemini
- Prompt Engineering
- Generative AI

### Audio Generation

- Murf AI
- Text-to-Speech (TTS)

### Frontend

- Lovable
- React
- TypeScript
- Vite

### Automation

- n8n
- Workflow Automation

### APIs & Integrations

- Google Gemini API
- Murf AI API
- Webhooks
- HTTP Request Nodes

### Deployment

- Lovable Deployment Platform

---

## Engineering Highlights

- Built an AI-powered podcast generation workflow using n8n
- Created and configured a dedicated Google AI Studio project
- Generated and managed Gemini API credentials
- Integrated Google Gemini with n8n using secure API authentication
- Automated podcast script generation using Google Gemini
- Integrated Murf AI for realistic voice synthesis
- Implemented REST API-based text-to-speech generation
- Configured binary audio downloads in n8n
- Designed an end-to-end text-to-audio automation pipeline
- Replaced Chat Trigger architecture with Webhook architecture
- Built and integrated a browser-based frontend using Lovable
- Implemented frontend-to-workflow communication
- Added browser audio playback capabilities
- Published a public-facing AI podcast generation application

---

## How It Works

1. User enters a podcast topic through the browser interface.
2. The frontend sends the topic to an n8n webhook.
3. Google Gemini generates a podcast-style script.
4. Murf AI converts the generated script into natural-sounding speech.
5. Murf AI returns an audio URL.
6. The workflow downloads the generated audio.
7. The generated podcast is returned to the frontend.
8. Users can listen directly from the browser.

---

## Challenges Faced

### Google AI Studio & Gemini

- Creating a dedicated Google AI Studio project
- Generating Gemini API credentials
- Connecting Gemini with n8n
- Prompt engineering for podcast script generation

### Murf AI Integration

- API authentication setup
- Text-to-speech endpoint configuration
- Voice selection and testing
- Audio generation workflow configuration

### Webhook Integration

- Replacing Chat Trigger architecture
- Frontend-to-workflow communication
- Request and response handling
- Error handling implementation

### Workflow Design

- Passing generated content between nodes
- Binary file handling
- Audio file downloads
- End-to-end workflow testing

---

## What I Learned

- Workflow Orchestration using n8n
- Google AI Studio Setup
- Gemini API Key Generation and Management
- Google Gemini Integration
- Prompt Engineering
- Murf AI Integration
- Text-to-Speech Generation
- React Frontend Integration
- Webhook Architecture
- HTTP Request Configuration
- Binary Data Handling
- API Authentication and Credential Management
- End-to-End AI Automation
- Frontend to Workflow Communication

---

## Repository Structure

```text
AI-Podcast-Generator
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── React frontend application
│
├── workflows/
│   ├── podcast-generator-v1.json
│   └── podcast-generator-v2-webhook.json
│
├── screenshots/
│
├── sample-podcast.wav
│
└── README.md
```

---

## Developer Guide: APIs, Models & Local Development

This project was created and published with **Lovable**. You can try the live application without installing anything. Follow the relevant path below only if you want to explore the source, edit the frontend, or run your own n8n workflow.

### Choose Your Path

| Goal | What you need |
|---|---|
| Try the published application | A browser and the [live demo](https://bubble-beat-booth.lovable.app) |
| Continue editing in Lovable | Access to the original Lovable project |
| Explore or run the frontend locally | Git, [Bun](https://bun.sh/) and the repository's frontend files |
| Run your own podcast workflow | An n8n instance, Google Gemini API access, and Murf API access |

Cloning this repository does **not** grant access to the original Lovable project, the deployed n8n instance, or its credentials.

### Services, APIs & Credentials

#### Google Gemini — Script generation

- **Get access:** [Google AI Studio](https://aistudio.google.com/)
- **Create/manage an API key:** [Gemini API key guide](https://ai.google.dev/gemini-api/docs/api-key)
- **API and model documentation:** [Gemini API docs](https://ai.google.dev/gemini-api/docs) · [Available models](https://ai.google.dev/gemini-api/docs/models)
- **Configure in n8n:** Create/select a Google Gemini credential, then choose the model in the **Google Gemini Chat Model** node.

**Model note:** The screenshots show `models/lyria-3-clip-preview` in the Gemini Chat Model node, while the exported workflow JSON files contain different model identifiers. These configurations are inconsistent. Lyria is associated with music generation, so do not assume it is suitable for generating a plain-text podcast script. Before running your own copy, select a currently available text-generation model and verify it with a workflow test. Model availability and node compatibility can change.

#### Murf AI — Text-to-speech

- **Get started:** [Murf API quickstart](https://murf.ai/api/docs/introduction/quickstart)
- **API reference:** [Generate speech](https://murf.ai/api/docs/api-reference/text-to-speech/generate)
- **Endpoint shown:** `POST https://api.murf.ai/v1/speech/generate`
- **Configure:** Store your Murf API key securely and reference it from the n8n HTTP Request node.

The workflow screenshot shows these speech settings:

| Setting | Value shown |
|---|---|
| Voice ID | `en-US-natalie` |
| Style | `Conversational` |
| Model version | `GEN2` |
| Locale | `en-IN` |

The exported workflow versions use different request-body shapes. Check the current Murf API documentation and selected workflow before copying settings; confirm that the voice and parameters are supported by your account.

**Security:** Never commit an API key to source code or workflow exports. Use n8n credentials/secret management. If a key has already been committed or shared, revoke or rotate it and remove the exposed value from the repository and its history.

#### n8n — Workflow orchestration

- **Create/use an instance:** [n8n](https://n8n.io/)
- **Documentation:** [n8n docs](https://docs.n8n.io/)
- **Import/export workflows:** [Workflow import/export guide](https://docs.n8n.io/workflows/export-import/)
- **Credentials:** [n8n credentials guide](https://docs.n8n.io/credentials/)

The repository includes two workflow exports:

- `workflows/podcast-generator-v1.json` — the original chat-triggered workflow.
- `workflows/podcast-generator-v2-webhook.json` — the webhook-based workflow intended for frontend integration.

To run your own backend, import the relevant workflow, configure your own Google Gemini and Murf credentials, verify the model and request parameters, and test each node. Workflow imports do not include working credentials or access to the original hosted n8n instance.

### Run the Frontend Locally (Optional)

Local setup is only needed if you want to work on the frontend outside Lovable.

1. Install [Git](https://git-scm.com/) and [Bun](https://bun.sh/).
2. Clone the repository and enter the frontend directory:

   ```bash
   git clone https://github.com/mohammedkhajamoinuddin/AI-Podcast-Generator.git
   cd AI-Podcast-Generator/frontend
   ```

3. Install dependencies and start the development server:

   ```bash
   bun install
   bun run dev
   ```

Available frontend scripts are defined in `frontend/package.json` (`dev`, `build`, `lint`, and `preview`). A successful frontend start does not by itself mean the podcast backend is configured or reachable.

### Connect Your Own n8n Workflow

The frontend server function is `frontend/src/lib/podcast.functions.ts`. It currently posts JSON containing a `text` field to a configured n8n webhook and expects a JSON response containing an `audioFile` URL.

Example request:

```json
{
  "text": "How artificial intelligence is changing education"
}
```

Expected response shape:

```json
{
  "audioFile": "https://example.com/generated-audio.wav"
}
```

The URL is illustrative only. When using your own workflow, configure the frontend to call your own webhook. Prefer a server-side environment variable over a hardcoded deployment URL, and never expose provider API keys in browser code. Ensure the n8n response matches the expected `audioFile` contract.

### Troubleshooting Checklist

- Confirm the n8n workflow is active and its webhook URL/mode is correct.
- Confirm the Google credential works and the selected model supports text generation.
- Confirm the Murf API key, voice ID, request fields, and account access are valid.
- Confirm the workflow returns an `audioFile` URL in the response expected by the frontend.
- Check n8n execution logs and provider responses for errors or quota limits.
- Review provider documentation for current model availability, pricing, and usage limits before running at scale.

---

## Sample Output

The following WAV file is the final podcast generated by the workflow:

**[Listen to the generated podcast](sample-podcast.wav)**

The audio was automatically generated using Google Gemini for script generation and Murf AI for text-to-speech synthesis.

---

## Project Impact

- Eliminates manual script creation
- Reduces podcast production effort
- Automates text-to-audio conversion
- Demonstrates practical AI audio generation
- Demonstrates frontend-to-backend integration
- Demonstrates webhook-based workflow automation
- Converts workflow automation into a user-facing application
- Converts simple user prompts into narrated podcast content
- Demonstrates integration of Generative AI, TTS, frontend engineering, and automation technologies

---

## Future Improvements

- Multi-speaker podcast conversations
- Voice selection options
- Background music integration
- Podcast publishing automation
- Transcript generation
- Multi-language podcast generation
- Podcast series creation
- Custom voice cloning support
- User authentication
- Podcast history management

---

## Security

No API keys, OAuth credentials, authentication tokens, or secrets are stored in this repository.

All credentials are managed securely through n8n credential management and external service providers.

---
