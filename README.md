# 🧱 Next.js 15 + Shadcn UI Boilerplate

A modern starter template using **Next.js 15 App Router**, **Shadcn UI**, **Tailwind CSS**, **Supabase**, and a set of **custom reusable components** to help you build production-grade web apps faster.

---

## ✨ Features

- ✅ Next.js 15 App Router
- ✅ Tailwind CSS
- ✅ Shadcn UI (Radix + Tailwind)
- ✅ TypeScript
- ✅ Supabase integration (auth-ready)
- ✅ Google Maps Places Autocomplete (address form)
- ✅ Pre-configured ESLint & Prettier
- ✅ Mobile-first, accessible components
- ✅ Dark mode ready

---

## 🚀 Getting Started

```bash
git clone https://github.com/muhammadumarfarooq/nextjs15-shadcn-boilerplate.git
cd nextjs15-shadcn-boilerplate
pnpm install     # or npm install / yarn install
pnpm dev         # start the local dev server
```

---

## ⚙️ Environment Setup

This project uses Supabase for authentication (and is extendable for database + storage). It also integrates Google Maps for address autocomplete.

To configure your environment:

```bash
cp .env.example .env.local
```

Then update `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

You can get these values from:
- **Supabase** → Project Settings → API
- **Google Cloud Console** → Credentials

---

## 🧩 Custom Reusable Components

These extend Shadcn base components with consistent styling and utility.

### ✅ Included

- `LoadingButton` – Button with built-in loading state
- `CircularLoader` – Minimal spinner for async content
- `DateRangePicker` – Range picker with calendar + popover
- `TextSeparator` – Divider with optional label
- `AddressAutoComplete` – Full address form with Google Maps Autocomplete, Zod validation, and lat/lng extraction

> Each component is fully typed and designed to be reusable.

---

## 🔐 Supabase Support

- ✅ **Auth-Ready** – Includes Supabase client setup for login, signup, and session handling
- ⚙️ **Easily Extendable** – Add your own DB queries and storage handlers using `supabase.from()` and `supabase.storage`

---

## 📁 Folder Structure

```
.
├── components/
│   ├── AddressAutoComplete/      # Address form + autocomplete logic
│   └── ui/                       # Reusable UI components
├── lib/                          # Utility functions (e.g., Supabase client)
├── app/                          # Next.js 15 App Router pages/layouts
├── styles/                       # Tailwind and global styles
├── public/                       # Static assets
├── .env.example                  # Environment variable template
└── ...
```

---

## 📄 License

MIT © [Muhammad Umar Farooq](https://github.com/muhammadumarfarooq)

---

## 🤝 Contributing

Contributions are welcome!  
If you'd like to add new components, improve existing ones, or enhance functionality:

1. Fork the repo
2. Create a new branch
3. Open a pull request

Please include clear documentation or usage examples where possible.

---

## ⭐️ Support

If you find this boilerplate helpful:

- ⭐️ Star the repo
- 🍴 Fork it for your own projects
- 🧵 Share it with your network

Let’s help other developers build faster together 🚀
