# Installation as Mobile/Desktop App

## 📱 Installation sur Mobile (iOS/Android)

### Sur iPhone/iPad (iOS Safari):
1. Ouvrir l'app dans Safari : `http://localhost:3000`
2. Appuyer sur le bouton "Partager" (icône carré avec flèche)
3. Scroller et sélectionner "Sur l'écran d'accueil"
4. Confirmer en appuyant sur "Ajouter"
5. L'icône BNP Wealth apparaît sur votre écran d'accueil

### Sur Android (Chrome):
1. Ouvrir l'app dans Chrome : `http://localhost:3000`
2. Appuyer sur le menu (3 points verticaux)
3. Sélectionner "Installer l'application" ou "Ajouter à l'écran d'accueil"
4. Confirmer l'installation
5. L'app apparaît dans votre tiroir d'applications

## 💻 Installation sur Desktop (Windows/Mac/Linux)

### Sur Chrome/Edge/Brave:
1. Ouvrir l'app : `http://localhost:3000`
2. Chercher l'icône d'installation dans la barre d'adresse (➕ ou ⬇️)
3. Cliquer sur "Installer" ou "Installer BNP Paribas Wealth Management"
4. L'app s'ouvre dans sa propre fenêtre
5. Accessible depuis le menu Démarrer/Launchpad

### Sur Mac (Safari avec macOS Sonoma+):
1. Ouvrir l'app dans Safari
2. Menu Fichier → "Ajouter à Dock"
3. L'app apparaît dans le Dock

## ✨ Avantages de l'installation

- 🚀 **Lancement rapide**: Icône dédiée sur l'écran d'accueil
- 📱 **Expérience native**: Pas de barre d'adresse, plein écran
- 💾 **Fonctionne hors ligne**: Cache local des données
- 🔔 **Notifications**: (si activées dans le futur)
- 🎨 **Interface immersive**: Barre de statut BNP verte sur mobile

## 🔧 Configuration PWA

L'application est maintenant une **Progressive Web App (PWA)** avec :

- ✅ Manifest.json configuré
- ✅ Service Worker pour le cache
- ✅ Icônes pour toutes les plateformes
- ✅ Meta tags pour iOS
- ✅ Thème color BNP (#00965e)
- ✅ Mode standalone
- ✅ Cache des assets statiques
- ✅ Cache des Google Fonts

## 📦 Pour le déploiement en production

1. Builder l'app : `npm run build`
2. Le dossier `dist/` contient tous les fichiers
3. Déployer sur n'importe quel hébergeur (Vercel, Netlify, etc.)
4. Les utilisateurs pourront installer depuis l'URL de production

## 🌐 Test en local

L'app est maintenant accessible en mode PWA sur :
- **Local**: http://localhost:3000/
- Testez l'installation depuis votre navigateur !
