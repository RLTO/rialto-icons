const fs = require("fs");
const path = require("path");

const icons = require("./icons.js");

const iconPath = (icon) => {
  const ghPath = "/icons"
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

buildReadme();
