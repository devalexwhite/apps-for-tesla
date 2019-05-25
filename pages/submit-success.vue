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
        class="flex flex-col justify-center bg-white w-1/2 py-8 px-6 rounded-lg"
      >
        <div class="max-w-sm mx-auto">
          <h3 style="color: #555;" class="text-xl font-semibold mb-4 block">
            Thanks!
          </h3>
          <p class="text-lg text-black font-normal leading-normal">
            Your submission has been received and will be evaluated for
            inclusion on the site.
          </p>
        </div>
      </article>
    </section>
  </main>
</template>
