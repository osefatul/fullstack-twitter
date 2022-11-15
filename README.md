# Twitter Full-Stack Clone

Please click [here](https://fullstack-twitter-5tg5gc4lh-osefatul.vercel.app/) to overview our web application.

### Intro
This is a fullstack (frontend with nextjs and backend with firebase) web app designed for eudcational purpose. We have used different technologies for this application such as nextjs, tailwind.css, firebase, recoil, next-auth, react-moment and etc. This web application has been deployed using vercel.

#### Using different layers of Tailwind

- If you want to bring changes in to the body of the app you have to use a base layer from the tailwind in to the global.css
  for example we want the change the color of the whole app body, we use base layer then @apply because apply enables you to write a tailwind code instead of css.
  ` @layer base { body { @apply bg-black } }`
- If we want to bring changes in one of the components and we can't do it with the help of tailwind alone we can use a class then define the css fo the that class in the component layer in the global.css. look at the below example we used for hoverAnimation in the sidebar.

`@layer components { .hoverAnimation { @apply hover:bg-[#d9d9d9] hover:bg-opacity-10 rounded-full cursor-pointer w-[52px] xl:w-auto xl:h-auto xl:py-3 xl:px-4 transition duration-200 ease-out } }`

### NextAuth.js

- [Installed library](https://next-auth.js.org/getting-started/upgrade-v4).
- Got an error while showing providers in the login page. getProvider wouldn't show the providers details. found the issue in the [github](https://stackoverflow.com/questions/70050759/trying-to-configure-next-auth-signin-page-but-having-a-problem-with-getprovider). In the env.local file the NEXT_AUTH must be started with http not https.
- To Enable google API authentication. go to
  [Google Cloud Platform -> APIs & Services -> Credentials](https://console.cloud.google.com/apis/credentials?project=twitter-d0844) and then add "http://localhost:3000/api/auth/callback/google" to the web Application as the Authorized redirect URLs, and "http://localhost:3000" as the authorized javascript URL.

#### How does it work?

- First add providers in to NextAuth component.
- Add session as a callback function, which means once someone sign in, session will be called afterwards to pass user to frontend/client side of the application.
- In the \_app.js file wrap the application with sessionProvider and session the callback function as the props of that layer.
- Call session in the serverside rendering function in the home page.
- So, now, whenever an application is open it will check session, if there is session then the google provider will be called. Once user provide their credentials then session will let user get in to client side of the webpage.

### Recoil

We have used Recoil for state management instead of redux in this project.

- create a folder called "atom". As in the redux we use slices however in this case we use atom

- recoil's atom is much closer to using useState, wherase we can't use useState as a global state, but recoil yes we can.

### Headless UI

[Headless UI](https://headlessui.dev) is one of a UI styled components based library to integrate designs with tailwind css.

We Used Headless UI for our comment modal.
[update..]I removed headless UI and designed myslef a modal that was appropriate for our project.

### Vercel deployment

    1- connect your github with vercel and import github depository.
    2- Add environment variables:
        a. GOOGLE_ID
        b. GOOGLE_SECRET
        C. NEXTAUTH_URL
        D. JWT_SECRET -> this has been generated with openssl
    3- Deploy.
    4- Change NextAuth_URL value to the deployed domain.
    5- Redeploy.
    6- Go to Google API and add the Domain and deployed urls.
