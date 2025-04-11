import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "数智未来 DLCN",
  description: "数智未来,构建数字生产力,DLCN,数字素养与技能学习社区",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
