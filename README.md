# GitHub Repository Roulette 🎲

A beautiful cross-platform mobile app built with Expo and React Native that helps you discover random GitHub repositories from any user.

![Made with Expo](https://img.shields.io/badge/Made%20with-Expo-000020?style=flat&logo=expo)
![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript)

## Features ✨

- 🔍 Search GitHub users by username
- 🎲 Get random repositories from any user
- ⭐ View repository statistics (stars, forks, watchers)
- 💻 See primary programming language
- 📱 Cross-platform (iOS, Android, Web)
- 🎨 Beautiful, modern UI with purple theme

## Get Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Screenshots 📸

<div align="center">
  <img src="docs/screenshots/home.png" alt="Home Screen" width="250"/>
  <img src="docs/screenshots/search.png" alt="Search Screen" width="250"/>
  <img src="docs/screenshots/results.png" alt="Results Screen" width="250"/>
</div>

## Deployment 🚀

### Web (GitHub Pages)

The app automatically deploys to GitHub Pages on every push to main.

**Live Demo**: `https://[your-username].github.io/randomrepo/`

### Android APK

Build and release APK using:

```bash
npm run build:android
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## Project Structure 📁

```
randomrepo/
├── app/                    # App screens (file-based routing)
│   ├── _layout.tsx        # Tab navigation layout
│   ├── index.tsx          # Home screen
│   └── settings.tsx       # GitHub repos search screen
├── assets/                 # Static assets
│   └── images/            # App icons and images
├── .github/
│   └── workflows/         # GitHub Actions workflows
│       ├── deploy-page.yaml    # Web deployment
│       └── release-apk.yaml    # APK build & release
├── app.json               # Expo configuration
├── eas.json              # EAS Build configuration
└── package.json          # Dependencies and scripts
```

## Tech Stack 🛠️

- **Framework**: Expo 54
- **Language**: TypeScript
- **Navigation**: Expo Router (file-based)
- **UI**: React Native components
- **Icons**: Ionicons
- **API**: GitHub REST API

## Contributing 🤝

Contributions are welcome! Feel free to open issues or submit pull requests.

## License 📄

MIT License - feel free to use this project for your own purposes.

## Author 👨‍💻

Made with ❤️ by Sakib
