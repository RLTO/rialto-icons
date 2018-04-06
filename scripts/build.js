import fs from "fs";
import path from "path";
import extract from "extract-svg-path";


import icons from "./icons.js"

const iconPath = (icon) => {
  const ghPath = "/src"
  return path.join(ghPath, icon);
}

const iconsMarkdown = icons.map((i) => (`|${i.replace(".svg", "")}|![](${iconPath(i.replace(".svg", "@3x.png"))})|\n`))
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

const buildReadme = () => {
  let dest = path.join(process.cwd(), "./README.md");
  fs.writeFile(dest, readme(), (err) => {
    if (err) throw err;
    console.log("README.md created!");
  });
}

const buildIconPaths = () => {
  const paths = icons.reduce((paths, icon) => (
    Object.assign(paths, { [icon.replace(".svg", "")]: extract(`icons/${icon}`)})
  ), {});

  let dest = path.join(process.cwd(), "./icons.js");
  fs.writeFile(dest, `module.exports = ${JSON.stringify(paths)}`, (err) => {
    if (err) throw err;
    console.log("icons.js created!");
  });
};

buildReadme();
buildIconPaths();