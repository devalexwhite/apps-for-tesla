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
    <section class="flex flex-col justify-start items-center flex-1">
      <article class="flex flex-col justify-center  w-1/2 py-8 px-6">
        <form method="POST" netlify name="suggest-app" action="/submit-success">
          <div class="mb-12">
            <label
              for="name"
              style="color: #555;"
              class="text-xl font-semibold mb-4 block"
            >
              Application Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              class="flex flex-row rounded-lg shadow-md bg-white px-6 py-6 w-full items-center font-semibold text-lg"
              style="color: #555555;"
              placeholder="A Better Route Planner"
            />
          </div>
          <div class="mb-12">
            <label
              for="href"
              style="color: #555;"
              class="text-xl font-semibold mb-4 block"
            >
              Web Address
            </label>
            <input
              id="href"
              type="text"
              name="href"
              class="flex flex-row rounded-lg shadow-md bg-white px-6 py-6 w-full items-center font-semibold text-lg"
              style="color: #555555;"
              placeholder="https://abetterrouteplanner.com"
            />
          </div>
          <div class="mb-12">
            <label
              for="category"
              style="color: #555;"
              class="text-xl font-semibold mb-4 block"
            >
              Category
            </label>
            <input
              id="category"
              type="text"
              name="category"
              class="flex flex-row rounded-lg shadow-md bg-white px-6 py-6 w-full items-center font-semibold text-lg"
              style="color: #555555;"
              placeholder="Navigation"
            />
          </div>
          <div class="mb-16">
            <label
              for="image"
              style="color: #555;"
              class="text-xl font-semibold mb-4 block"
            >
              Web Address of Logo Image (optional)
            </label>
            <input
              id="image"
              type="text"
              name="image"
              class="flex flex-row rounded-lg shadow-md bg-white px-6 py-6 w-full items-center font-semibold text-lg"
              style="color: #555555;"
              placeholder="https://abetterrouteplanner.com/icon/abrp_icon.png"
            />
          </div>
          <button
            type="Submit"
            class="max-w-xs bg-purple-darker text-white no-underline rounded-full py-3 px-16 flex justify-center items-center font-semibold text-lg"
          >
            Submit
          </button>
        </form>
      </article>
    </section>
  </main>
</template>
