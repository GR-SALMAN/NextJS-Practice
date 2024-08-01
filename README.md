This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


<<<<<<< Routing-navigation
### NextJS Basics: Loading massage..

---

_This repository is a practice of the first NextJS topic: Loading._ All source files are placed in the 'app' folder.

Here if somehow the internet is slow or the content is too big to load, you just have to put a loading massage till the content has come.
All you have to do do, just at the rout folder as we did earlier as layput/page.jsx we just have to create a file named 'loading'
just there write your loading massage and then save it. nextJS will automatically render the loading massage to the children sagement

```
function itemsloading() {
  return <div> Homapage loading....</div>;
}

export default itemsloading;

```

### NextJS Basics: Routing and Navigation
--------------------------------
*This repository is a practice of the first NextJS topic: Routing and Navigation.* All source files are placed in the 'app' folder.

When the project is built and ready to run, it searches for a page.js or page.jsx file in each folder, similar to how index.html works. This file renders the front-side of the page. For navigation, a layout.jsx file is used. Pages are rendered within the layout, allowing for consistent navigation across the application.

To include navigation, simply pass the children prop as a parameter to the layout component and then render the children within the component.

For routing, create folders with specific names. If a folder contains a page.js file, Next.js automatically creates a route with the same name. You can use links like '/(folder name)' to navigate to these pages. If the folder also includes a layout.jsx file, it will be used as the layout for that route.
>>>>>>> main

