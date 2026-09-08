# Sorak Mobile

> Cross-platform Mobile Client for the **Sorak Preschool Child Development and Health Monitoring System** (Trường Mầm non Hòn Tre).

Built with **React Native** and **Expo SDK 52**.

---

## 🛠 Tech Stack

- **Core**: React Native 0.76 + Expo SDK 52
- **State Management**: Zustand 5 + TanStack Query 5
- **Networking**: Axios
- **Storage**: AsyncStorage
- **Icons**: Lucide React Native

---

## 📁 Directory Structure

```
sorak-mobile/
├── assets/                      # Application icons & splash screen
├── src/
│   ├── app/                     # Providers & navigation container
│   ├── components/ui/           # Reusable native UI components
│   ├── features/                # Domain-driven screens & workflows
│   └── shared/
│       ├── api/                 # Axios client instance
│       ├── constants/           # Theme, color tokens, layout constants
│       ├── hooks/               # Custom hooks
│       ├── stores/              # Zustand persistent stores
│       └── utils/               # Formatting and date helpers
├── ARCHITECTURE.md              # Architectural standards & conventions
├── app.json                     # Expo configuration
├── package.json
└── App.js                       # Root entry point
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for full design system details and architectural rules.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 22+
- Expo Go app on iOS / Android (or Xcode Simulator / Android Studio Emulator)

### Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm start
   ```

Scan the QR code with your mobile camera (iOS) or the Expo Go app (Android).