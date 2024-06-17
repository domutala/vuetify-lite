const fs = require("fs");

function bootstrap() {
  const cssFiles = [];

  function _liter(from = "") {
    const cssImportRegex = /\bimport\s*(['"])(.*?)\1\s*;/g;

    const dirs = fs.readdirSync(`./lib/${from}`);

    for (const dir of dirs) {
      const path = `./lib/${from}/${dir}`;
      if (fs.statSync(path).isDirectory()) _liter(`${from}/${dir}`);
      else {
        if (dir.endsWith(".mjs")) {
          let content = fs.readFileSync(path, "utf8");
          if (cssImportRegex.test(content)) {
            content = content.replaceAll(
              cssImportRegex,
              "// -- css import remove --"
            );
            fs.writeFileSync(path, content);
          }
        } else if (dir.endsWith(".css")) {
          if (
            from.startsWith("/labs") ||
            from.startsWith("/components") ||
            from.startsWith("/directives")
          ) {
            cssFiles.push(`@import "..${from}/${dir}";`);
          }
        }
      }
    }
  }

  _liter();

  if (cssFiles.length) {
    const path = `./lib/styles/components.css`;
    fs.writeFileSync(path, cssFiles.join("\n"));
  }
}

bootstrap();
