const fs = require("fs").promises;
const getTheme = require("./theme");

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/light.json", JSON.stringify(
      getTheme({
        theme: "light",
        name: "A/J Light",
      }), 
      null, 2
    )),
    fs.writeFile("./themes/dark.json", JSON.stringify(
      getTheme({
        theme: "dark",
        name: "A/J Dark",
      }), 
      null, 2
    )),
    fs.writeFile("./themes/dimmed.json", JSON.stringify(
      getTheme({
        theme: "dimmed",
        name: "A/J Dimmed"
      }), 
      null, 2
    )),
  ]))
  .catch(() => process.exit(1))