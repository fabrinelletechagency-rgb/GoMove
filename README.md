# GoMove

Application web de commande de taxi — GoMove connecte passagers et chauffeurs
pour des courses de transport urbain en voiture, rapides, sûres et abordables.

## Fonctionnalités

- **Hero** (page d'accueil) avec titre, sous-titre et barre de réservation rapide
- **Onglet Accueil** : comment fonctionne GoMove + qui sommes-nous
- **Onglet Tarifs** : 3 offres (Éco, Confort, VIP)
- **Onglet Témoignages** : 5 avis clients
- **Onglet Commander** : formulaire de réservation de taxi, enregistré dans Supabase
- **Footer** : contact et réseaux sociaux
- Design moderne bleu et blanc, 100% responsive (mobile / tablette / desktop)

## Stack technique

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/) pour l'enregistrement des réservations

## Démarrage

```bash
npm install
npm run dev
```

## Configuration de la base de données (Supabase)

1. Dans votre projet Supabase, ouvrez **SQL Editor** et exécutez le script
   [`supabase/schema.sql`](./supabase/schema.sql). Il crée la table
   `bookings` et une policy de sécurité (RLS) qui autorise uniquement la
   **création** de réservations depuis le site — personne ne peut lire,
   modifier ou supprimer les réservations des autres via la clé publique.
2. Récupérez l'URL du projet et la clé **anon (publique)** dans
   **Project Settings → API**.
3. Copiez `.env.example` vers `.env` et renseignez les deux valeurs :

```bash
cp .env.example .env
```

```
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-cle-anon
```

4. Redémarrez `npm run dev`. Sans ces variables, le formulaire de commande
   affiche un message expliquant que la réservation en ligne n'est pas
   encore activée, au lieu d'échouer silencieusement.

Pour consulter les réservations reçues, utilisez le **Table editor** de
Supabase (table `bookings`) — la clé publique du site ne permet pas de les
lire.

## Build de production

```bash
npm run build
npm run preview
```

Pensez à configurer `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` comme
variables d'environnement sur votre hébergeur (Vercel, Netlify, etc.).
