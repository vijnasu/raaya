/* RAAYA Console — Firebase configuration.
   Get these values: Firebase console → Project settings (gear) → Your apps → "raaya" → SDK setup and configuration → Config.
   Replace ONLY the two PASTE_ values below (apiKey and projectId). The rest is derived.
   Until apiKey is pasted, the Console keeps using browser-local storage. */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyB7RKCXasCpONsLwQDe7u6siC2-0BmV5KI",
  projectId: "raaya-console",
  appId: "1:1029252993822:web:df076cf563529d3ba2af0f",
  messagingSenderId: "1029252993822",
  get authDomain(){ return this.projectId + ".firebaseapp.com"; },
  get storageBucket(){ return this.projectId + ".appspot.com"; }
};
