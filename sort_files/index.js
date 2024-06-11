import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "E:\\Vaibhav D\\Full Stack Web\\Learn NodeJS\\sort_files";
let files = await fs.readdir(basepath);

for (const n of files) {
  const ext = n.split(".")[n.split(".").length - 1];
  if (
    ext != "js" &&
    ext != "json" &&
    fsn.existsSync(path.join(basepath, ext))
  ) {
    fs.rename(path.join(basepath, n), path.join(basepath, ext, n));
  } else {
    fs.mkdir(ext);
  }
}
console.log(files);
