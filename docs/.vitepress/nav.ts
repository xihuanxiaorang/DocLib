import { DefaultTheme } from "vitepress";

export default [
  {
    text: "🧰工具箱",
    activeMatch: "/01.Articles/ToolBox/",
    items: [
      {
        text: "开发工具",
        link: "/01.Articles/ToolBox/DevKit/JDK",
        activeMatch: "/01.Articles/ToolBox/DevKit/",
      },
      {
        text: "其他工具",
        link: "/01.Articles/ToolBox/Tools/手摸手教你搭建部署 Vitepress 博客",
        activeMatch: "/01.Articles/ToolBox/Tools/",
      },
    ],
  },
  {
    text: "🗂️杂记",
    activeMatch: "/01.Articles/Misc/",
    link: "/01.Articles/Misc/如何将阿里云域名托管至 Cloudflare？",
  },
] as DefaultTheme.NavItem[];
