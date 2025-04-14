# 🧱 Next.js 15 + Shadcn UI Boilerplate

A modern starter template using **Next.js 15 App Router**, **Shadcn UI**, **Tailwind CSS**, **Supabase**, and a set of **custom reusable components** to help you build production-grade web apps faster.

---

## ✨ Features

- ✅ Next.js 15 App Router
- ✅ Tailwind CSS
- ✅ Shadcn UI (Radix + Tailwind)
- ✅ TypeScript
- ✅ Supabase integration (auth-ready)
- ✅ Custom reusable components:
  - `LoadingButton`
  - `CircularLoader`
  - `DateRangePicker`
  - `TextSeparator`
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

This project uses Supabase for authentication (and can be extended for database + storage).

To configure your environment, copy the example file and update your own values:

```bash
cp .env.example .env.local
```

Then update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

You can find these in your Supabase project's **Settings → API** tab.

---

## 🧩 Custom Reusable Components

These extend Shadcn base components with consistent styling and utility.

### ✅ Included

- `LoadingButton` – Button with built-in loading state
- `CircularLoader` – Minimal spinner for async content
- `DateRangePicker` – Range picker with calendar + popover
- `TextSeparator` – Divider with optional label

> More reusable components will be added soon!

---

## 🔐 Supabase Support

- ✅ **Auth-Ready** – Includes Supabase client setup for login, signup, and session handling
- ⚙️ **Easily Extendable** – Add your own DB queries and storage handlers using `supabase.from()` and `supabase.storage`

---

## 📁 Folder Structure

```
.
├── components/         # UI components (Shadcn + custom)
├── app/                # Next.js 15 App Router structure
├── lib/                # Utility functions (e.g., Supabase client)
├── styles/             # Tailwind and global styles
├── public/             # Static assets
├── .env.example        # Environment variable template
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
