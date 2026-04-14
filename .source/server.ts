// @ts-nocheck
import * as __fd_glob_7 from "../content/posts/what-is-xxx.zh.mdx?collection=posts"
import * as __fd_glob_6 from "../content/posts/what-is-xxx.mdx?collection=posts"
import * as __fd_glob_5 from "../content/logs/v2.0.zh.mdx?collection=logs"
import * as __fd_glob_4 from "../content/logs/v2.0.mdx?collection=logs"
import * as __fd_glob_3 from "../content/logs/v1.0.zh.mdx?collection=logs"
import * as __fd_glob_2 from "../content/logs/v1.0.mdx?collection=logs"
import * as __fd_glob_1 from "../content/docs/index.zh.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {}, {"index.mdx": __fd_glob_0, "index.zh.mdx": __fd_glob_1, });

export const logs = await create.docs("logs", "content/logs", {}, {"v1.0.mdx": __fd_glob_2, "v1.0.zh.mdx": __fd_glob_3, "v2.0.mdx": __fd_glob_4, "v2.0.zh.mdx": __fd_glob_5, });

export const pages = await create.docs("pages", "content/pages", {}, {});

export const posts = await create.docs("posts", "content/posts", {}, {"what-is-xxx.mdx": __fd_glob_6, "what-is-xxx.zh.mdx": __fd_glob_7, });