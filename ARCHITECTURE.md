# Sorak Mobile — Architecture & Mobile Design System

> **Single source of truth** for mobile client engineering across the Sorak team.
> Enforces architectural consistency and design standards across iOS and Android.

---

## 1. Technology Stack

- **Framework**: React Native 0.76 + Expo SDK 52
- **State Management**: Zustand 5 + TanStack Query 5
- **Networking**: Axios (apiClient)
- **Local Persistence**: AsyncStorage
- **Component Styling**: Standard StyleSheet with centralized design tokens (`COLORS`, `SPACING`)
- **Icons**: Lucide React Native

---

## 2. Directory Structure

```
sorak-mobile/
├── assets/                      # Application icons & splash screen
├── src/
│   ├── app/                     # Application providers & root navigation
│   ├── components/
│   │   └── ui/                  # Reusable presentational components (Button, Card, Input)
│   ├── features/                # Domain feature modules (<domain>/<Screen>Screen.jsx)
│   └── shared/
│       ├── api/                 # Axios client instance (client.js)
│       ├── constants/           # Design system tokens (theme.js)
│       ├── hooks/               # Custom reusable hooks
│       ├── stores/              # Zustand global client stores (auth.store.js)
│       └── utils/               # Date, number, and string formatting utilities
├── ARCHITECTURE.md              # Architectural standards & guidelines
├── app.json                     # Expo configuration manifest
├── babel.config.js              # Babel presets
├── jsconfig.json                # Path mapping (@/* -> src/*)
├── package.json
└── App.js                       # Root entry point
```

---

## 3. Design System & Theme Tokens

All styles must reference the centralized design tokens defined in `src/shared/constants/theme.js`. **Never write arbitrary hex codes** directly inside screen styles.

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Primary** | `#f5a623` (Amber) | Main action buttons, active navigation tabs, highlight badges |
| **Primary Dark** | `#d48806` | Pressed states, dark accents |
| **Foreground** | `#1A2845` (Ink Navy) | Primary heading and body text |
| **Muted Foreground**| `#64748b` (Slate) | Subtitles, descriptions, placeholder text |
| **Background** | `#ffffff` | Primary screen surface |
| **Background Secondary** | `#f8fafc` | Screen background backdrop |
| **Border** | `#e2e8f0` | Dividers, card borders, input borders |
| **Destructive** | `#ef4444` | Danger actions, delete confirmations |
| **Success** | `#22c55e` | Check-in status, success alerts |

---

## 4. Engineering Conventions

1. **Path Aliases**: Always use `@/` to import from `src/` (e.g. `@/shared/api/client`, `@/shared/constants/theme`).
2. **Data Acquisition**: Always use TanStack Query hooks for server requests. Do not store server state in local component state.
3. **Session Persistence**: Authentication state and bearer tokens are persisted via Zustand + AsyncStorage in `auth.store.js`.
4. **Localization**:
   - User-facing text, alerts, buttons: **Vietnamese**.
   - Code, variables, comments, commits: **English**.