// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "index.zh.mdx": () => import("../content/docs/index.zh.mdx?collection=docs"), }),
  logs: create.doc("logs", {"v1.0.mdx": () => import("../content/logs/v1.0.mdx?collection=logs"), "v1.0.zh.mdx": () => import("../content/logs/v1.0.zh.mdx?collection=logs"), "v2.0.mdx": () => import("../content/logs/v2.0.mdx?collection=logs"), "v2.0.zh.mdx": () => import("../content/logs/v2.0.zh.mdx?collection=logs"), }),
  pages: create.doc("pages", {}),
  posts: create.doc("posts", {"what-is-xxx.mdx": () => import("../content/posts/what-is-xxx.mdx?collection=posts"), "what-is-xxx.zh.mdx": () => import("../content/posts/what-is-xxx.zh.mdx?collection=posts"), }),
};
export default browserCollections;