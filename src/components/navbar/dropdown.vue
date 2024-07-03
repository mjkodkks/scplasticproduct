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
    ]">
    <template v-for="item in menuitems" :key="item.title">
      <li
        v-if="item.children"
        :class="[isMobile ? 'relative flex flex-col gap-2 cursor-pointer p-2': 'relative flex gap-2 items-center cursor-pointer p-2 [&>.child-menu]:hover:visible [&>.child-menu]:hover:opacity-100 [&>.item-with-arrow>.arrow-icon]:hover:rotate-90']"
        class="hover:bg-primary-100 rounded-md [&>.item-with-arrow>.arrow-icon]:hover:transition-all [&>.item-with-arrow>.arrow-icon]:hover:duration-300">
        <div class="flex gap-2 item-with-arrow">
          <div class="text-black text">{{ item.title }}</div>
          <div class="text-black grid place-content-center arrow-icon rotate-0 transition-all duration-300">
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
          :class="[isMobile ? 'child-menu' : 'child-menu absolute left-[100%] top-0 min-w-[200px] transition-all duration-300']"></Dropdown>
      </li>
      <li v-else class="text-black p-2 hover:bg-primary-100 rounded-md">
       <a :href="item.path">{{ item.title }}</a> 
      </li>
    </template>
  </ul>
</template>

<style scoped>
</style>
