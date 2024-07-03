<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import Menu from "./menu.vue";
import type { MenuItem } from "app";

interface Props {
  contactLocaleData?: any;
  menuitems: MenuItem[];
}
defineProps<Props>();

const isMobileOpen = ref(false);
const r = document.querySelector<HTMLElement>(":root");
function bindScroll(evt) {
  const condition =
    document.body.scrollTop > 0 || document.documentElement.scrollTop > 0;
  if (!r) return;
  if (condition) {
    r.style.setProperty("--header-height", "5rem");
  } else {
    r.style.setProperty("--header-height", "7rem");
  }
}

onMounted(() => {
  if (!document) return;
  document.addEventListener("scroll", bindScroll);
});

onUnmounted(() => {
  if (!document) return;
  document.removeEventListener("scroll", bindScroll);
});
</script>

<template>
  <div
    class="w-full sticky top-0 z-20 bg-primary-900 transition-all duration-500"
    style="height: var(--header-height)"
    id="header">
    <header
      class="block lg:flex flex-col lg:flex-row lg:justify-between lg:items-center h-full">
      <div
        class="flex w-full lg:w-auto items-center justify-between px-4 h-full">
        <a href="/" class="text-lg w-[200px]">
          <slot name="logo"></slot>
        </a>
        <div
          class="block lg:hidden text-white"
          id="menuMobileBtn"
          @click="isMobileOpen = !isMobileOpen">
          <svg
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="https://www.w3.org/2000/svg">
            <path
              class="astronav-close-icon astronav-toggle hidden"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path>
            <path
              class="astronav-open-icon astronav-toggle"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path>
          </svg>
        </div>
      </div>

      <Menu :menuitems="menuitems" />
      <div class="w-[200px] hidden lg:block">
        <slot name="menu-right"></slot>
      </div>
    </header>
  </div>

  <slot></slot>

  <div
    id="menu-mobile"
    class="lg:hidden grid sticky z-20 transition-all duration-500 overflow-hidden shadow-md bg-white"
    style="top: var(--header-height)" :style="{
      maxHeight: isMobileOpen ? '100vh' : '0',
    }">
    <Menu :menuitems="menuitems" customClass="overflow-hidden" is-mobile />
    <slot name="menu-right"></slot>
  </div>
</template>

<style scoped></style>
