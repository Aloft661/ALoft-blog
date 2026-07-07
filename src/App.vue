<script setup>
  import zhCn from "element-plus/es/locale/lang/zh-cn";

  import { onMounted } from "vue";
  import { useBlogStore } from "@/stores/blog";
  import { useThemeStore } from "@/stores/theme";

  const blogStore = useBlogStore();
  const themeStore = useThemeStore();

  onMounted(() => {
      blogStore.init();
      themeStore.applyTheme();
  });
</script>

<template>
  <div>
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>
