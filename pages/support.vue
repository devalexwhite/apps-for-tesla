<template>
  <main class="flex flex-col min-h-screen" style="background: #EEEEEE;">
    <header
      style="background-color: #FAFAFA;"
      class="w-full shadow-md py-4 px-8 mb-8"
    >
      <nav>
        <ul class="list-reset">
          <li class="inline-block">
            <nuxt-link
              to="/"
              class="border-2 no-underline rounded-full py-3 px-16 flex justify-center items-center font-semibold text-lg text-black"
              style="border-color: #b8b8b8;"
              >Back</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </header>
    <section
      class="flex flex-col justify-center items-center flex-1 overflow-y-auto"
    >
      <article
        class="flex flex-col justify-center bg-white w-1/2 py-8 rounded-lg"
      >
        <div class="max-w-sm mx-auto px-12 flex flex-col items-center">
          <img src="/doggo.jpg" class="rounded-full" width="200" height="200" />
          <p
            class="text-2xl my-8 leading-normal text-black font-normal text-center"
          >
            Your support helps me put more Christmas lights on my dog (and
            continue supporting this website)!
          </p>
          <img src="/support-qr.png" />
          <a
            href="https://www.buymeacoffee.com/7dxmb2CFj"
            target="_blank"
            class="bg-purple-darker text-white no-underline rounded-full py-3 px-16 flex justify-center items-center font-semibold text-lg"
          >
            Buy Me a Coffee
          </a>
        </div>
      </article>
    </section>
  </main>
</template>
