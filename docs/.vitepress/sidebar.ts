import { DefaultTheme } from "vitepress";

export default {
  "/01.Articles/ToolBox/": [
    {
      text: "开发工具",
      base: "/01.Articles/ToolBox/DevKit/",
      items: [
        { text: "JDK", link: "JDK" },
        { text: "IDEA", link: "IDEA" },
        { text: "Git", link: "Git" },
        { text: "MySQL", link: "MySQL" },
        { text: "Navicat", link: "Navicat" },
      ],
    },
  ],
} as DefaultTheme.Sidebar;
