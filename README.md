# BookLibraryApp 📚

Welcome to **BookLibraryApp**, a modern and lightweight mobile book library application built with **React Native** and **Expo**. 

This app allows users to explore a collection of books, filter by category, search by title or author, view detailed book info, and bookmark their favorite books.

---

## ✨ Features

- **🏠 Dashboard (Home Screen):** A welcoming dashboard displaying top-rated and recently added books.
- **🔍 Explorer (Books Screen):** Live search engine allowing users to search books by title or author.
- **🏷️ Category Filtering:** Segment books instantly using interactive category chips (Fiction, Sci-Fi, Biography, Business, Tech).
- **❤️ Favorites Management:** Bookmark and remove books to/from your personal saved collection using React Context.
- **👤 Profile Page:** A profile view showing member details and displaying a dedicated list of bookmarked titles.
- **📖 Detailed Screen:** View comprehensive information including book cover, rating, price, and a full synopsis.

---

## 🛠️ Tech Stack & Dependencies

- **Core Framework:** [Expo (v54)](https://expo.dev/) & [React Native](https://reactnative.dev/)
- **Navigation:** [React Navigation (v7)](https://reactnavigation.org/)
  - `@react-navigation/bottom-tabs`
  - `@react-navigation/stack`
- **Icons:** `@expo/vector-icons` (Ionicons)
- **State Management:** React Context API for global favorites state

---

## 📂 Project Structure

```text
BookLibraryApp/
├── assets/                  # App icon, splash screen, and web assets
├── src/
│   ├── components/
│   │   └── BookCard.js      # Reusable responsive card element for listing books
│   ├── context/
│   │   └── FavoritesContext.js # Global state manager for bookmarked items
│   ├── data/
│   │   └── booksData.js     # Mock library dataset & category definitions
│   ├── navigation/
│   │   └── AppNavigator.js  # Stack & Bottom-Tab navigation configuration
│   └── screens/
│       ├── HomeScreen.js    # Library Dashboard Screen
│       ├── BooksScreen.js   # Live Search & Explore Screen
│       ├── CategoriesScreen.js # Category-wise Filtered List Screen
│       ├── BookDetailsScreen.js # Full Synopsis & Book Details Screen
│       └── ProfileScreen.js  # User Profile & Bookmarks List Screen
├── App.js                   # Root entry component wrapping providers
├── app.json                 # Expo configurations
├── index.js                 # App registration point
├── metro.config.js          # Metro Packager optimization configuration
└── package.json             # Scripts & dependencies
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Android Studio](https://developer.android.com/studio) (for Android Emulator) or [Xcode](https://developer.apple.com/xcode/) (macOS only, for iOS Simulator)

### 💻 Installation

1. Clone the repository (if you are setting it up on a new machine):
   ```bash
   git clone https://github.com/jagdishpatel2010/BookLibraryApp.git
   cd BookLibraryApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### 📱 Running the Application

1. Start your Android Emulator or iOS Simulator.
2. Launch the Expo developer server:
   ```bash
   npx expo start
   ```
3. To open the app on the running emulator, press **`a`** (for Android) or **`i`** (for iOS) in your terminal.
4. Alternatively, you can type **`exp://localhost:8081`** inside the manual URL bar of the **Expo Go** app on your emulator to load it directly.

---


