import fs from "fs";
import path from "path";

import icons from "./icons.js"

const iconPath = (icon) => {
  const ghPath = "/src"
  return path.join(ghPath, icon);
}

const iconsMarkdown = icons.map((i) => (`|${i.replace("@3x.png", "")}|![](${iconPath(i)})|\n`))
                           .join("")

const readme = () => (
  `
# Rialto icons
Below you'll find a list of icons

| Name  | Preview |
|-------|---------|
${iconsMarkdown}
  `
)


const build = () => {
  let dest = path.join(process.cwd(), "./README.md");
  fs.writeFile(dest, readme(), (err) => {
    if (err) throw err;
    console.log("README.md created");
  });
};

build();
