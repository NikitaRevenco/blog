import { type MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

import { Separator } from "../ui/separator";
import { Note } from "./admonition";
import { CodeBlock, InlineCode } from "./code";
import { Highlight } from "./highlight";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import {
  A,
  Blockquote as BlockQuote,
  H1,
  H2,
  H3,
  H4,
  Li,
  Ol,
  P,
  Ul,
} from "./typography";

export const mdxComponents: MDXComponents = {
  /* eslint ts/naming-convention: "off" -- We have to use PascalCase in order for our custom components to work */
  Note,
  Highlight,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  blockquote: BlockQuote,
  ul: Ul,
  ol: Ol,
  li: Li,
  pre: CodeBlock,
  // @ts-expect-error -- need variable to know if we should style it as an inline <code> or as a code block
  code: InlineCode,
  table: Table,
  tbody: TableBody,
  thead: TableHead,
  tr: TableRow,
  th: TableHeader,
  td: TableData,
  a: A,
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...(props as ImageProps)}
    />
  ),
  hr: () => <Separator className="my-10" />,
  // sup: Asterisk,
  // figcaption: Figcaption,
  // br, a, em, hr, img, strong, del, input, section, sup
};