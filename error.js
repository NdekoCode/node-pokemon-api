import fs from "fs/promises";
const files = ["./file-1.md", "./abc.md", "./file-2.md"];
files.forEach((file) => {
  console.log(file);
  (async (file) => {
    try {
      const data = await fs.readFile(file);
      console.log(data.toString());
    } catch (error) {
      if (error.code === "ENOENT") {
        console.error(`The file ${file} does not exists`);
      } else {
        console.log(error.message);
      }
    }
  })(file);
});
