# Twitter Full-Stack Clone

#### Using different layers of Tailwind

- If you want to bring changes in to the body of the app you have to use a base layer from the tailwind in to the global.css
  for example we want the change the color of the whole app body, we use base layer then @apply because apply enables you to write a tailwind code instead of css.
  ` @layer base { body { @apply bg-black } }`
- If we want to bring changes in one of the components and we can't do it with the help of tailwind alone we can use a class then define the css fo the that class in the component layer in the global.css. look at the below example we used for hoverAnimation in the sidebar.

`@layer components { .hoverAnimation { @apply hover:bg-[#d9d9d9] hover:bg-opacity-10 rounded-full cursor-pointer w-[52px] xl:w-auto xl:h-auto xl:py-3 xl:px-4 transition duration-200 ease-out } }`

### NextAuth.js

- [install library](https://next-auth.js.org/getting-started/upgrade-v4).

- Got an error while showing providers in the login page. getProvider wouldn't show the providers details. found the issue in the [github](https://stackoverflow.com/questions/70050759/trying-to-configure-next-auth-signin-page-but-having-a-problem-with-getprovider). In the env.local file the NEXT_AUTH must be started with http not https.
