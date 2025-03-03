<script lang="ts" setup>
import type { MenuItem } from "app";
import Dropdown from "./dropdown.vue";
interface Props {
  menuitems: MenuItem[];
  isMobile?: boolean;
  customClass?: string;
}
defineProps<Props>();
</script>

<template>
  <ul
    :class="[
      isMobile ? 'opacity-100 visible flex flex-col' : 'opacity-0 invisible flex flex-col bg-white rounded-md shadow-md',
      customClass,
    ]"
    role="menu">
    <template v-for="item in menuitems" :key="item.title">
      <li
        v-if="item.children"
        role="menuitem"
        :class="[isMobile ? 
        'flex flex-col gap-2 cursor-pointer p-2' : 
        'flex gap-2 w-full items-center [&:hover_>_.child-menu]:visible [&:hover_>_.child-menu]:opacity-100']"
        class="relative rounded-md hover:bg-primary-100">
        <div class="flex justify-between w-full gap-2 p-2 item-with-arrow">
          <div class="text-black text">{{ item.title }}</div>
          <div class="grid text-black transition-all duration-300 rotate-0 place-content-center arrow-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m10 17l5-5l-5-5" />
            </svg>
          </div>
        </div>
        <Dropdown
          :is-mobile="isMobile"
          :menuitems="item.children"
          :class="[isMobile ? 'child-menu' : 'child-menu absolute left-[100%] top-0 min-w-[max-content] transition-all duration-300']"></Dropdown>
      </li>
      <li v-else class="text-black rounded-md hover:bg-primary-100" role="menuitem">
       <a :href="item.path" class="flex w-full h-full p-2">{{ item.title }}</a> 
      </li>
    </template>
  </ul>
</template>

<style scoped>
</style>
