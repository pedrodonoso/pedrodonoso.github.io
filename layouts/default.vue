<template>
  <div class="font-mono select-none">
    <Navbar />
    <main class="flex justify-center p-6 md:p-12 min-h-[calc(100vh-136px)]">
      <section class="flex flex-col justify-center w-screen max-w-3xl md:max-w-2xl md:p-0">
        <slot />
      </section>
    </main>
    <Footer />
  </div>
</template>
