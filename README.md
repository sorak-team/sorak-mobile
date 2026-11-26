# sorak-mobile

Mobile client application for the Sorak preschool management platform. Provides dedicated mobile interfaces for educators and parents with real-time push notifications, daily classroom routine tracking, and offline-resilient data caching.

## Architecture

The application is structured around a domain-driven feature architecture with file-based routing and atomic UI primitives:

- **`app/`**: Expo Router file-based route definitions, root layout providers, role navigation groups (`(teacher)`, `(parent)`), and auth screens.
- **`features/`**: Domain-isolated business modules (auth, daily, attendance, pickup, assessment, health, report, notification).
- **`components/ui/`**: Base UI component primitives built with React Native Reusables (RNR) and NativeWind.
- **`components/shared/`**: Cross-module composite components including data tables, calendars, action sheets, and filter bars.
- **`shared/`**: Network client (Axios with automated token refresh), secure token storage, utility hooks, and i18n dictionaries.

## Tech Stack

- **Runtime & Framework**: React Native 0.86, React 19, Expo SDK 57 (Expo Router)
- **Styling**: NativeWind 4 (Tailwind CSS 3.4), Lucide React Native
- **UI Primitives**: React Native Reusables (RNR - shadcn pattern for React Native)
- **State Management & Caching**: TanStack Query (React Query) 5, Zustand 5
- **Networking**: Axios with request retry queue and token synchronization
- **Storage & Security**: Expo SecureStore (encrypted auth tokens), AsyncStorage (app preferences)
- **Notifications**: Expo Notifications with Firebase Cloud Messaging (FCM)
- **Lists & Gestures**: Shopify FlashList, React Native Gesture Handler, Gorhom Bottom Sheet
- **Internationalization**: Bilingual support (Vietnamese and English)

## Role Portals

- **Teacher**: Homeroom classroom overview, student roster, daily attendance check-ins, routine timetable schedules, health measurements, daily educational rubric scoring, weekly achievement flower badges, semester progress books, and authorized pickup request approvals.
- **Parent**: Real-time student activity feed, daily meal menus, attendance logs, absence leave requests, authorized pickup delegation with guardian photo capture, WHO growth percentile curves, semester assessment reports, and multi-child account switching on a single device.
- **Common Services**: Two-factor authentication (OTP), password recovery, device session management, notification inbox with tabbed news/activities, push notifications with account auto-switching, dark/light theme switching, and bilingual localization.

## Project Structure

```
sorak-mobile/
├── app/                     # Expo Router routes and role layout groups
│   ├── (parent)/            # Parent portal navigation tabs and views
│   ├── (teacher)/           # Teacher portal navigation tabs and views
│   ├── auth/                # Login, 2FA OTP verification, password recovery
│   └── settings/            # Appearance, language, sessions, legal documents
├── assets/                  # Brand illustrations, custom fonts, and splash assets
├── components/
│   ├── shared/              # Composite shared components (calendar, tables, sheets)
│   └── ui/                  # Reusable RNR primitives (Button, Card, Badge, Input, etc.)
├── features/                # Domain-driven feature modules
│   ├── assessment/          # Evaluations, rubrics, and semester progress books
│   ├── attendance/          # Daily check-in/out and absence tracking
│   ├── auth/                # Authentication client, schemas, and session hooks
│   ├── daily/               # Daily routines, timetables, and classroom logs
│   ├── health/              # Health vitals, WHO percentile curves, and advisory
│   ├── home/                # Role-specific dashboard overviews
│   ├── notification/        # Push notifications, inbox, and school news
│   ├── pickup/              # Pickup delegation requests and guardian verification
│   └── report/              # Class overviews and student progress summaries
├── shared/
│   ├── api/                 # Axios HTTP client and interceptors
│   ├── hooks/               # Global utility hooks (appearance, responsive)
│   ├── i18n/                # Localization translation dictionaries (vi, en)
│   └── storage/             # SecureStore and AsyncStorage wrapper abstractions
├── app.json                 # Expo application configuration and EAS settings
├── babel.config.js          # Babel presets and NativeWind configuration
├── package.json
└── tailwind.config.js       # Design tokens and theme customization
```

## Getting Started

### Prerequisites

- Node.js 20+ (Node.js 22 LTS recommended)
- npm 10+
- Android Studio (Android SDK & Build Tools, Android Virtual Device or USB-debugging device)
- macOS with Xcode (optional, required for iOS development)

### Installation & Setup

1. Clone the repository and enter the directory:
   ```bash
   git clone https://github.com/sorak-team/sorak-mobile.git
   cd sorak-mobile
   ```

2. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Set the API backend URL in `.env.local`:
   ```env
   EXPO_PUBLIC_API_URL=https://test2mamnonhontre.sorak.io.vn/api
   ```
   > **Note:** Variables prefixed with `EXPO_PUBLIC_` are bundled into the client application. Do not store sensitive secrets or private API keys in this file.

3. Install dependencies:
   ```bash
   npm ci
   ```

4. Build and run development client on Android:
   ```bash
   npx expo run:android
   ```
   This prebuilds the native `android/` directory and installs the debug APK on your emulator or connected device. Because the application utilizes native modules (push notifications, camera/image picker, secure storage), a custom development build is required instead of standard Expo Go.

5. For subsequent development sessions, start the Metro bundler:
   ```bash
   npm run dev
   ```
   Launch the installed app on your device, and it will connect to the Metro server with Fast Refresh.

## Available Scripts

- `npm run dev`: Starts the Metro development server with cache cleared (`expo start -c`).
- `npm run android`: Starts Metro and launches the app on an Android device or emulator.
- `npm run ios`: Starts Metro and launches the app on an iOS simulator (macOS only).
- `npm run web`: Starts the experimental web preview.
- `npm run clean`: Cleans Metro cache and `node_modules/`.

## Default Accounts

Use the following accounts (password: `Sorak@2026`) to access different role views on the testing server:

| Role | Username | Accessible View |
| :--- | :--- | :--- |
| Teacher (Primary) | `CB24001` | Homeroom roster, attendance, timetable, health logs, pickup review |
| Teacher (Assistant) | `CB25001` | Assistant educator routine overview and activity evaluations |
| Parent | `HS26001` | Parent portal feed, attendance logs, leave requests, pickup delegation |

*(Note: Administrator and Principal accounts (`ADMIN01`) use the web portal at [sorak-web](https://github.com/sorak-team/sorak-web)).*

## Push Notifications & Native Build

Push notification delivery requires an active development build or standalone release binary:

- **Expo Push Token**: Configured via `EAS_PROJECT_ID` in `.env.local` or `app.json`.
- **Android Firebase (FCM)**: Configured via `google-services.json` at project root or referenced via `GOOGLE_SERVICES_JSON` in `.env.local`.
- Notification taps feature automated role/child account switching and direct deep linking into target screens.

## Continuous Integration & Release Builds (CI/CD)

The application features an automated build workflow orchestrated via GitHub Actions on the `release/tester` branch:

- **Android (.apk)**: Built in Release mode, automatically signed with the tester keystore (`sorak-android-<sha>.apk`). Can be installed directly onto physical Android devices or emulators.
- **iOS (.ipa)**: Packaged as an unsigned binary (`sorak-ios-<sha>.ipa`). Users can utilize [Sideloadly](https://sideloadly.io/) or equivalent tools to sign and install on physical iPhone/iPad devices.

### Download Instructions:
1. Navigate to the **Actions** tab on GitHub: [sorak-team/sorak-mobile/actions](https://github.com/sorak-team/sorak-mobile/actions).
2. Select the latest completed workflow run on the `release/tester` branch.
3. Scroll down to the **Artifacts** section to download the respective `.apk` or `.ipa` archive.
