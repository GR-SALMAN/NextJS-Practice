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

### NextJS Basics: Error Page

---

_This repository is a practice of the first NextJS topic: Error page._ All source files are placed in the 'app' folder.
So, if there is been somekind of error on your code for some reason, that can occur error:
Like you can make yourself and error:

- Just inside the function use this:

```
throw new Error("Whats wrong with you?");
```

and the the entire page gonna occur and error.

#### So, the error has been generated, so what can you do for that?

Just simply make a file names `error.jsx` and paste this JS code inside:

```
'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
```

##### Everytime any code error occus, its gonna show up!

If you look closely, there is a mode at the top called "Use Client" that means the error as that are gonna detected is based on the client side error

Key Points:
- The 'use client' directive is essential for error components.
- The error prop provides details about the error.
- The reset function can be used to attempt to recover from the error.
- It's recommended to log errors to an error reporting service for monitoring and debugging.
