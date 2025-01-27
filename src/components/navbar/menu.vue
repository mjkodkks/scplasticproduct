<script lang="ts" setup>
import Dropdown from "./dropdown.vue";
import type { MenuItem } from "app";
interface Props {
  menuitems: MenuItem[];
  isMobile?: boolean;
  customClass?: string;
}
defineProps<Props>();
</script>

<template>
  <ul
    v-if="!isMobile"
    :class="['hidden lg:flex flex-row gap-3 bg-transparent', customClass]"
    role="menu">
    <template v-for="item in menuitems" :key="item.title">
      <button v-if="item.children" class="relative text-white flex gap-2 items-center cursor-pointer group/parent" 
      :aria-label="item.title" aria-level="1" role="menuitem">
        <span>{{ item.title }}</span> <svg class="group-hover/parent:rotate-90 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5l-5-5"/></svg>
        <Dropdown :menuitems="item.children" class="group-hover/parent:visible group-hover/parent:opacity-100 absolute left-[10%] top-[80%] min-w-[200px] transition-all duration-300"></Dropdown>
      </button>
      <li v-else class="text-white" role="menuitem" :aria-label="item.title" aria-level="1">
        <a :href="item.path">{{ item.title }}</a> 
      </li>
    </template>
  </ul>
  <Dropdown v-else :menuitems="menuitems" is-mobile></Dropdown>
</template>
<style scoped></style>
