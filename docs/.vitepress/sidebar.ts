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
        { text: "Tomcat", link: "Tomcat" },
        { text: "nvm", link: "nvm" },
        { text: "Node.js", link: "Node.js" },
        { text: "nrm", link: "nrm" },
        { text: "pnpm", link: "pnpm" },
        { text: "UNPKG", link: "UNPKG" },
        { text: "Conda", link: "Conda" },
        { text: "python", link: "python" },
        { text: "thefuck", link: "thefuck" },
        { text: "Github", link: "Github" },
        { text: "VSCode", link: "VSCode" },
        { text: "Windows Terminal", link: "Windows Terminal" },
        { text: "WSL2", link: "WSL2" },
        { text: "Cursor", link: "Cursor" },
        { text: "curl", link: "curl" },
        { text: "内网穿透工具", link: "内网穿透工具" },
      ],
    },
  ],
} as DefaultTheme.Sidebar;
