<template>
  <Navbar />
  <main class="flex flex-row">
    <!-- <aside class="w-1/4 hidden md:block" > -->
    <aside class="hidden md:block" >
      <slot name="aside" />
    </aside>
    <!-- <section class="flex w-full"> -->
    <section class="flex flex-col w-screen justify-center text-left p-6 md:p-12 min-h-[calc(100vh-136px)]">
      <slot />
    </section>
  </main>
  <Footer />
</template>
