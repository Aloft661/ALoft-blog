import { defineStore } from "pinia";
import { ref, computed } from "vue";

const THEME_KEY = "blog-theme";

export const useThemeStore = defineStore("theme", () => {
    const theme = ref(localStorage.getItem(THEME_KEY) || "dark");
    
    const isDark = computed(() => theme.value === "dark");

    const applyTheme = () => {
        document.documentElement.classList.toggle("dark", isDark.value);
        localStorage.setItem(THEME_KEY, theme.value);
    }

    const toggleTheme = () => {
        theme.value = isDark.value ? "light" : "dark";
        applyTheme();
    }

    return {
        theme,
        isDark,
        toggleTheme,
        applyTheme,
    }
});