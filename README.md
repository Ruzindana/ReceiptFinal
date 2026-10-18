# ReceiptFinal Android test app

This project wraps the existing receipt generator in a Capacitor Android app.

## Build a debug APK on Windows

1. Install Node.js 22 or later, pnpm, Android Studio, and an Android SDK (API 24 or later).
2. In this folder, run `pnpm install`.
3. Run `pnpm run android:apk`.
4. Install `android/app/build/outputs/apk/debug/app-debug.apk` on an Android phone, or open the `android` folder in Android Studio and run the app on a connected device.

After editing `index.html`, run `pnpm run android:sync` before building so the app uses the latest page.

The RawBT printing buttons require the RawBT Android app to be installed. The PDF export also loads html2pdf.js and html2canvas from a CDN, so that feature needs an internet connection.
