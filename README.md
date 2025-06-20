# MOVIES APP

---

## About the Project

A cross-platform mobile app built with React Native for Browse movies. The purpose of this app is to provide a simple and easy way to browse and search for movies. Built with the intention to provide accurate information about the movies in a centralized place.

## Folder Structur

.ACADEMIA
├── **tests**
├── .bundle
├── .vscode
├── android
├── assets
│ └── fonts
│ ├── Gilroy-Black.ttf
│ ├── Gilroy-BlackItalic.ttf
│ ├── Gilroy-Bold.ttf
│ ├── Gilroy-BoldItalic.ttf
│ ├── Gilroy-ExtraBold.ttf
│ ├── Gilroy-ExtraBoldItalic.ttf
│ ├── Gilroy-Heavy.ttf
│ ├── Gilroy-HeavyItalic.ttf
│ ├── Gilroy-Light.ttf
│ ├── Gilroy-LightItalic.ttf
│ ├── Gilroy-Medium.ttf
│ ├── Gilroy-MediumItalic.ttf
│ ├── Gilroy-Regular.ttf
│ ├── Gilroy-RegularItalic.ttf
│ ├── Gilroy-SemiBold.ttf
│ ├── Gilroy-SemiBoldItalic.ttf
│ ├── Gilroy-Thin.ttf
│ ├── Gilroy-ThinItalic.ttf
│ ├── Gilroy-UltraLight.ttf
│ ├── Gilroy-UltraLightItalic.ttf
│ └── Help - Guide Document.pdf
├── ios
├── node_modules
├── src
│ ├── assets
│ │ └── fonts
│ ├── components
│ │ ├── CarouselHeader.tsx
│ │ ├── Footer.tsx
│ │ ├── Header.tsx
│ │ ├── HomeBanner.tsx
│ │ ├── Layout.tsx
│ │ ├── Movies.tsx
│ │ ├── MovieSection.tsx
│ │ └── TabBar.tsx
│ ├── hooks
│ │ └── useTMDB.ts
│ ├── navigation
│ │ ├── AppNavigator.tsx
│ │ └── BottomTabs.tsx
│ ├── screens
│ │ ├── HomeScreen.tsx
│ │ ├── ProfileScreen.tsx
│ │ ├── SearchScreen.tsx
│ │ └── WishListScreen.tsx
│ ├── services
│ ├── theme
│ ├── types
│ │ ├── PopularMovie.ts
│ │ └── react-native-vector-icons.d.ts
├── .env
├── .eslintrc.js
├── .gitignore
├── .prettierrc.js
├── .watchmanconfig
├── App.tsx
├── app.json
├── babel.config.js
├── env.d.ts
├── Gemfile.lock
├── index.js
├── jest.config.js
├── metro.config.js
├── package-lock.json
├── package.json
├── react-native.config.js
├── README.md
└── tsconfig.json

---

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

````dotenv
TMDB_ACCESS_TOKEN=mock_access_token_example_123456
TMDB_API_KEY=mock_api_key_example_abcdef
TMDB_URL=[https://api.themoviedb.org/3](https://api.themoviedb.org/3)
TMDB_IMAGES_BASE_URL=[https://image.tmdb.org/t/p](https://image.tmdb.org/t/p)



---

## Setup Instructions

### Prerequisites

* **Node.js** 18+
* **npm**
* **React Native** 0.80
* **React Native CLI**
* **Android Studio**
* **Xcode** (Mac)
* **CocoaPods** (Mac)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/mauricioarrequena/mobile-academia.git](https://github.com/mauricioarrequena/mobile-academia.git)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd academia
    ```

3.  **Install JavaScript dependencies:**

    ```bash
    npm install
    ```

### Installation (macOS Specific)

1.  **Navigate to the iOS directory:**

    ```bash
    cd ios
    ```

2.  **Install Bundler:**

    ```bash
    bundle install
    ```

3.  **Install iOS dependencies with CocoaPods:**

    ```bash
    bundle exec pod install
    ```

### Run on Android

1.  **Start the Metro bundler:**

    ```bash
    npx start
    ```

2.  **Run the Android app:**

    ```bash
    npx react-native run-android
    ```

### Run on iOS

1.  **Start the Metro bundler:**

    ```bash
    npx start
    ```

2.  **Run the iOS app:**

    ```bash
    npx react-native run-ios
    ```
    *Note: After installing dependencies on iOS, you might need to run `npx react-native start --reset-cache` to clear the cache if you encounter issues.*


---

## CI/CD Instructions

Not yet configured.

---

## Tech Stack

* **React Native** + CLI
* **React Navigation**
* **The Movie Database (TMDB) API**

---

## Troubleshooting

If you encounter issues on iOS after installing dependencies, try the following:

1.  **Clear the Metro bundler cache:**

    ```bash
    npx react-native start --reset-cache
    ```

2.  **Reinstall iOS dependencies (if needed):**

    ```bash
    cd ios
    bundle install
    bundle exec pod install
    ```