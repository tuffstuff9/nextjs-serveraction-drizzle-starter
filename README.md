# Next.js 13 with Drizzle ORM & PlanetScale Starter Template

A robust starter template for Next.js 13, integrated with Drizzle ORM and PlanetScale. This template provides a quick and seamless option to get up and running quickly.

https://github.com/tuffstuff9/nextjs-serveraction-drizzle-starter/assets/57072903/38d5a66f-115c-4fd6-b841-80fa3556a02c


## 🌟 Features

- **[Next.js App Router](https://nextjs.org/docs)**: The latest version of the popular React framework for server-rendered applications.
- **[Drizzle ORM](https://drizzle-orm-link.com/docs)**: A modern and efficient ORM to manage database operations.
- **[PlanetScale](https://planetscale.com/docs)**: A scalable and serverless relational database.
- **[TailwindCSS](https://tailwindcss.com/docs)**: A utility-first CSS framework for rapid UI development.
- **[Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)**: Utilize the experimental features of Next.js for better server-side operations.
- **[UseFormStatus](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#experimental-useformstatus)**: An experimental hook to manage form states.


## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or Yarn

### Setup

See the accompanying [blog post](https://tuffstuff9.hashnode.dev/setting-up-drizzle-orm-with-planetscale-for-your-nextjs-13-app?ref=twitter-share) for a more detail overview. 

1. **Clone the Repository**
    ```bash
    git clone https://github.com/tuffstuff9/nextjs-serveraction-drizzle-starter.git
    cd nextjs-serveraction-drizzle-starter
    ```

2. **Install Dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Setup Environment Variables**
    - Create a .env file
    - Set up your PlanetScale database and add the `DATABASE_URL` to the `.env` file. See [here](https://tuffstuff9.hashnode.dev/setting-up-drizzle-orm-with-planetscale-for-your-nextjs-13-app#heading-setting-up-planetscale) for further details on how to setup PlanetScale integration.
    - Modify the copied connection string by replacing `?sslaccept=strict` with `?ssl={"rejectUnauthorized":true}`

4. **Run Migrations**
   ```bash
   yarn drizzle-kit push:mysql
   # or
   npm run drizzle-kit push:mysql
   ```

5. **Start Development Server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

Now, you can open [http://localhost:3000](http://localhost:3000) in your browser to see your app in action!



## 📃 License

This project is [MIT](./LICENSE) licensed.
