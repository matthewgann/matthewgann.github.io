// GitHub Pages serves a custom 404 only from /404.html. With trailingSlash the
// export writes it to /404/index.html, so copy it up to the root.
import fs from "node:fs";
if (fs.existsSync("out/404/index.html")) {
  fs.copyFileSync("out/404/index.html", "out/404.html");
  console.log("postbuild: wrote out/404.html");
}
