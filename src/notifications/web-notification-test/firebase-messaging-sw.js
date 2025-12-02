importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDlt1gO4DBMB54U-BRlkFP1rHMCcQWbrpM",
  authDomain: "unipet-78d6a.firebaseapp.com",
  projectId: "unipet-78d6a",
  storageBucket: "unipet-78d6a.firebasestorage.app",
  messagingSenderId: "1010741787276",
  appId: "1:1010741787276:web:47e62be5dcc3b3e49559a9",
  measurementId: "G-8KKVEKN3C1"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification?.title || 'New Notification';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: payload.notification?.icon || '/firebase-logo.png',
    badge: '/badge-icon.png',
    data: payload.data
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notification click received.', event);
  
  event.notification.close();
  
  const urlToOpen = event.notification.data?.screen 
    ? `https://yourapp.com/${event.notification.data.screen}`
    : 'https://yourapp.com';
  
  event.waitUntil(
    clients.openWindow(urlToOpen)
  );
});
