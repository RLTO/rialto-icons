const fs = require("fs");
const path = require("path");

const icons = require("./icons.js");

const iconPath = (icon) => {
  const ghPath = "/icons"
  return path.join(ghPath, icon);
}

const toCamelCase = (filename) => (
  filename.split(/[-,_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("")
)

const iconsMarkdown = icons.map((i) => (`|${toCamelCase(i).replace(".svg", "")}|![](${iconPath(i.replace(".svg", "@3x.png"))})|\n`))
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
