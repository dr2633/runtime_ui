## Interface Design and Experiments for Runtime Labs

Runtime UI is the user interface for interacting with the temporal simulation and memory-grounded planning layer of Runtime Labs. This interface supports counterfactual scheduling, editable memory traces, and feedback-driven agent behavior—designed in a co-creative, visually intuitive format.

OpenAI-inspired design with charcoal base + neon green accents  
Built with React, Tailwind, and FastAPI backend integration

---

## Core Concepts

- Simulated Planning: Model generates multiple candidate task timelines
- Feedback Loop: Users provide structured feedback (edit, accept, reject)
- Editable Memory: Calendar acts as both execution surface and traceable log
- Multimodal UI: Visual calendar + text interface for refining plans

---

## Project Structure

```
/web  
  /components  
    /calendar               # Calendar interface + utilities  
    /chatbox                # Feedback panel  
    /styles                 # Theme + event type styling  
  /hooks                    # Custom logic for state and data fetching  
  /pages                    # Entrypoints (e.g., planner.tsx)  
  /types                    # TypeScript interfaces and enums  
```

---

## Setup & Installation

### 1. Clone the repository

```
git clone https://github.com/runtimelabs/runtime_ui.git  
cd runtime_ui
```

### 2. Install dependencies

```
npm install  
```

### 3. Start development server

```
npm run dev
```

Ensure FastAPI backend (/api) is running on /api with Windsurf or proxy setup.

---

## Component Overview

### SimulationCalendar.tsx

- Orchestrates simulation view
- Fetches simulated options via /api/simulate
- Manages view mode, event selection, and theme

### CalendarView.tsx

- Renders events using:
  - Daily / Weekly / Monthly toggles
  - Conditional UI overlays per view mode

### CalendarEventBlock.tsx

- Styled event block w/ rationale, stress indicators, hover behavior

### ChatBox.tsx

- Textbox for feedback on selected event
- POSTs feedback to /api/feedback

---

## Theming & Design

- Charcoal Base: #0D0D0D  
- Neon Green: #00FF88  

Toggleable between:

- Dark (default)
- Neon
- Light

Themes controlled via:
useCalendarState.ts → theme state  
calendarThemes.ts → Tailwind classes

---

## Simulated API Contract

**Request:**

```
POST /api/simulate  
{
  "task": "Prepare investor memo",  
  "deadline": "2025-05-30",  
  "context_window": "2025-05-25 to 2025-05-30"  
}

**Response:**
[
  {
    "uid": "opt_001",
    "start_time": "2025-05-28T10:00:00",
    "end_time": "2025-05-28T12:00:00",
    "summary": "Morning block — high energy",
    "rationale": "Avoids overlap with investor call",
    "stress_estimate": 0.2,
    "energy_match": 0.9
  }
]
```
---

## Development Roadmap

- [ ] Add drag-and-drop editing support  
- [ ] Extend simulation logic with goal alignment  
- [ ] Add population-level behavior insights  
- [ ] Enable memory trace annotations

---

## Contributing

1. Fork and clone this repo  
2. Create a feature branch  
3. Submit a pull request with clear description  

Please follow the Runtime Contribution Guide for detailed rules and style conventions:  
https://docs.runtimelabs.ai/contributing

---

## Questions or Feedback?

Contact: derek@runtimelabs.ai  
Join the early user feedback group by submitting the form at runtimelabs.ai

---

© 2025 Runtime Labs — All rights reserved.
