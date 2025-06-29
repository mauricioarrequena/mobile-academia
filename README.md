# MOVIES APP

## About the Project
A cross-platform mobile app built with React Native for Browse movies. The purpose of this app is to provide a simple and easy way to browse and search for movies. Built with the intention to provide accurate information about the movies in a centralized place.

## Table of Contents
* [Folder Structure](#folder-structure)
* [Environment Variables](#environment-variables)
* [Setup Instructions](#setup-instructions)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Installation (macOS Specific)](#installation-macos-specific)
    * [Run on Android](#run-on-android)
    * [Run on iOS](#run-on-ios)
* [CI/CD Instructions](#cicd-instructions)
* [TMDB API Integration](#tmdb-api-integration)
* [Tech Stack](#tech-stack)
* [Troubleshooting](#troubleshooting)
* [Deployed Files](#deployed-files)
* [Video Presentation](#video-presentation)


## Folder Structure
You want to replace the spaces and tabs used for indentation with hyphens (-) in your folder structure, and still have it display correctly in your README.

While using hyphens instead of spaces/tabs for visual indentation is less conventional for folder structures, you can certainly do it. The key to making it look good on GitHub and ensuring the hyphens aren't misinterpreted by Markdown is still to **enclose the entire structure within a fenced code block**.

Here's the chunk of your README with hyphens for indentation:

---
## Folder Structure

```
📁 .ACADEMIA
-📁 **tests**
-📁 .bundle
-📁 .vscode
-📁 android
-📁 assets
--📁 fonts
---📄 Gilroy-Black.ttf
---📄 Gilroy-BlackItalic.ttf
---📄 Gilroy-Bold.ttf
---📄 Gilroy-BoldItalic.ttf
---📄 Gilroy-ExtraBold.ttf
---📄 Gilroy-ExtraBoldItalic.ttf
---📄 Gilroy-Heavy.ttf
---📄 Gilroy-HeavyItalic.ttf
---📄 Gilroy-Light.ttf
---📄 Gilroy-LightItalic.ttf
---📄 Gilroy-Medium.ttf
---📄 Gilroy-MediumItalic.ttf
---📄 Gilroy-Regular.ttf
---📄 Gilroy-RegularItalic.ttf
---📄 Gilroy-SemiBold.ttf
---📄 Gilroy-SemiBoldItalic.ttf
---📄 Gilroy-Thin.ttf
---📄 Gilroy-ThinItalic.ttf
---📄 Gilroy-UltraLight.ttf
---📄 Gilroy-UltraLightItalic.ttf
--📄 Help - Guide Document.pdf
-📁 ios
-📁 node_modules
-📁 src
--📁 components
---📄 AddCollection.tsx
---📄 AddToCollectionsModal.tsx
---📄 AddToWishlist.tsx
---📄 CollectionList.tsx
---📄 CollectionListItem.tsx
---📄 Footer.tsx
---📄 Header.tsx
---📄 Highlight.tsx
---📄 HomeBanner.tsx
---📄 Layout.tsx
---📄 MovieCard.tsx
---📄 MovieRowSection.tsx
---📄 MovieRowSectionHeader.tsx
---📄 RemoveToWishlist.tsx
---📄 TabBarFooter.tsx
--📁 context
---📄 WishlistContext.tsx
--📁 database
---📄 db.ts
--📁 hooks
---📄 useThemedStyles.ts
---📄 useTMDB.ts
---📄 useTMDBById.ts
--📁 navigation
---📄 HomeStackNavigator.tsx
---📄 MainNavigator.tsx
---📄 ProfileStackNavigator.tsx
---📄 RootNavigator.tsx
--📄 types.ts
--📁 screens
---📄 CollectionsScreen.tsx
---📄 HomeScreen.tsx
---📄 MovieDetail.tsx
---📄 ProfileScreen.tsx
---📄 SearchScreen.tsx
---📄 SectionScreen.tsx
---📄 WishlistScreen.tsx
--📁 services
---📄 colors.ts
--📁 theme
---📁 types
----📄 Collection.ts
----📄 Movie.ts
----📄 react-native-sqlite-storage.d.ts
----📄 react-native-vector-icons.d.ts
-📄 .env
-📄 .eslintrc.js
-📄 .gitignore
-📄 .prettierrc.js
-📄 .watchmanconfig
-📄 App.tsx
-📄 app.json
-📄 babel.config.js
-📄 env.d.ts
-📄 Gemfile.lock
-📄 index.js
-📄 jest.config.js
-📄 metro.config.js
-📄 package-lock.json
-📄 package.json
-📄 react-native.config.js
-📄 README.md
-📄 tsconfig.json
```


## Environment Variables
Create a `.env` file in the root directory and add the following environment variables:
dotenv file
TMDB_ACCESS_TOKEN=mock_access_token_example_123456
TMDB_API_KEY=mock_api_key_example_abcdef
TMDB_URL=[https://api.themoviedb.org/3](https://api.themoviedb.org/3)
TMDB_IMAGES_BASE_URL=[https://image.tmdb.org/t/p](https://image.tmdb.org/t/p)


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
bash
git clone [https://github.com/mauricioarrequena/mobile-academia.git](https://github.com/mauricioarrequena/mobile-academia.git)


2. **Navigate to the project directory:**
bash
cd academia


3.  **Install JavaScript dependencies:**
bash
npm install


### Installation (macOS Specific)
1.  **Navigate to the iOS directory:**
bash
cd ios
2.  **Install Bundler:**
bash
bundle install
3.  **Install iOS dependencies with CocoaPods:**
bash
bundle exec pod install

### Run on Android
1.  **Start the Metro bundler:**
bash
npx start

2.  **Run the Android app:**
bash
npx react-native run-android

### Run on iOS
1.  **Start the Metro bundler:**
bash
npx start

2.  **Run the iOS app:**
bash
npx react-native run-ios
*Note: After installing dependencies on iOS, you might need to run `npx react-native start --reset-cache` to clear the cache if you encounter issues.*

## CI/CD Instructions
Not yet configured.


### TMDB API Integration

This project leverages The Movie Database (TMDB) API to fetch comprehensive movie and TV show data. The TMDB API provides access to a vast database of information including movie titles, overviews, genres, release dates, ratings, cast and crew details, images, and much more.

**Key features enabled by TMDB API:**

* **Movie Listings:** Displaying popular, trending, and upcoming movies.
* **Search Functionality:** Allowing users to search for specific movies or TV shows.
* **Detailed Views:** Presenting in-depth information for individual titles.
* **Image Assets:** Retrieving movie posters and backdrops.

To use this application, you will need an API key from TMDB. Please ensure your `.env` file contains your TMDB API key as `TMDB_API_KEY`. You can obtain a key by registering for an account on the [TMDB website](https://www.themoviedb.org/documentation/api).


## Tech Stack

* **React Native** + CLI
* **React Navigation**
* **The Movie Database (TMDB) API**
* **SQLite**
* **Async Storage**

## Troubleshooting
If you encounter issues on iOS after installing dependencies, try the following:

1.  **Clear the Metro bundler cache:**
bash
npx react-native start --reset-cache

2.  **Reinstall iOS dependencies (if needed):**
bash
cd ios
bundle install
bundle exec pod install

## Deployed Files

* **Deployed APK and AAB files:** [https://drive.google.com/drive/folders/1cyz7Jz416a6peg2BpTXqeFt9MA80Pgp4](https://drive.google.com/drive/folders/1cyz7Jz416a6peg2BpTXqeFt9MA80Pgp4)

## Video Presentation

* **Video Presentation:** [https://drive.google.com/drive/folders/13MODDuBbKJ2halTwYO_iAVkaPsWq3jzC?usp=drive_link](https://drive.google.com/drive/folders/13MODDuBbKJ2halTwYO_iAVkaPsWq3jzC?usp=drive_link)