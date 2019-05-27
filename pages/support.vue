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
    <section class="flex flex-col justify-center items-center flex-1">
      <article
        class="flex flex-col justify-center bg-white w-1/4 py-8 rounded-lg"
      >
        <div class="max-w-sm mx-auto">
          <img src="/support-qr.png" />
          <a
            href="https://twitter.com/alexwhitedev"
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
