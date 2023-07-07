import * as fs from "fs";
import * as path from "path";

import matter from "gray-matter";

export const getPostData = (id: string) => {
  const fullPath = path.join("../posts/", `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return matterResult.data;
};
