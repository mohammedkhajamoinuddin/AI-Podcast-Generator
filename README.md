# AI Podcast Generator

An AI-powered podcast generation workflow that transforms user-provided topics into professionally narrated podcast-style audio episodes using Google AI Studio, Google Gemini, Murf AI, and n8n.

---

## Overview

This project automates podcast creation using Generative AI and Text-to-Speech technologies.

Instead of manually researching a topic, writing a script, recording narration, and editing audio, the workflow generates a complete podcast-style audio episode automatically.

The user simply provides a topic, and the workflow:

- Generates a podcast script using Google Gemini
- Converts the script into natural-sounding speech using Murf AI
- Downloads the generated audio file
- Produces a ready-to-listen podcast-style audio episode

The result is a fully automated text-to-audio content generation pipeline.

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

- Chat-based topic input
- AI-generated podcast script creation
- Google AI Studio integration
- Google Gemini integration
- Murf AI text-to-speech conversion
- Natural-sounding podcast narration
- Automated audio generation
- Automated audio download
- End-to-end workflow automation
- API-driven architecture
- Binary audio file handling

---

## Workflow

### User Flow

```text
Enter Podcast Topic
         ↓
Generate Podcast Script
         ↓
Convert Text to Speech
         ↓
Download Audio File
         ↓
Listen to Podcast
```

---

## Architecture

```text
User Topic
      ↓
Chat Trigger
      ↓
Google AI Studio
      ↓
Google Gemini
Podcast Script Generator
      ↓
Murf AI API
Text-to-Speech Generation
      ↓
Audio URL Response
      ↓
Podcast Audio Downloader
      ↓
Generated Podcast Audio (.wav)
```

---

## Detailed Technical Architecture

```text
┌────────────────────┐
│ Chat Trigger       │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Podcast Script     │
│ Generator          │
│ Google Gemini      │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Murf AI API        │
│ Text-to-Speech     │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Audio Downloader   │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ WAV Audio Output   │
└────────────────────┘
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

### Automation

- n8n
- Workflow Automation

### APIs & Integrations

- Google Gemini API
- Murf AI API
- HTTP Request Nodes

---

## Engineering Highlights

- Built a chat-driven podcast generation workflow
- Created and configured a dedicated Google AI Studio project
- Generated and managed Gemini API credentials
- Integrated Google Gemini with n8n using secure API authentication
- Automated podcast script generation using Google Gemini
- Integrated Murf AI for realistic voice synthesis
- Implemented text-to-speech generation through REST APIs
- Configured binary audio downloads in n8n
- Designed an end-to-end text-to-audio automation pipeline
- Automated podcast-style audio creation from a single user prompt

---

## How It Works

1. User enters a podcast topic through the chat interface.
2. Google Gemini generates a conversational podcast script.
3. Murf AI converts the generated script into natural-sounding speech.
4. Murf AI returns an audio URL.
5. A second HTTP Request node downloads the generated audio file.
6. The workflow produces a ready-to-listen podcast-style audio episode.

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
- HTTP Request Configuration
- Binary Data Handling
- Chat-Based Workflow Design
- API Authentication and Credential Management
- End-to-End AI Automation

---

## Screenshots

### Workflow Overview

![Workflow Overview](screenshots/workflow-overview.png)

The n8n workflow orchestrates the complete podcast generation pipeline, from chat-based topic input through AI script generation, text-to-speech conversion, and audio download.

---

### Generated Podcast Script

![Generated Podcast Script](screenshots/chat-generated-script.png)

Google Gemini generates the podcast script based on the topic provided through the chat interface.

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
- Showcases API-driven workflow automation
- Converts simple user prompts into complete narrated audio content
- Demonstrates Generative AI and Text-to-Speech integration

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

---

## Security

No API keys, OAuth credentials, authentication tokens, or secrets are stored in this repository.

All credentials are managed securely through n8n credential management and external service providers.

---
