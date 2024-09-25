import { parseMarkdown } from "@/lib/server_utils";
import { readFileSync } from "fs";

const Footer = async () => {
  async function create() {
    return parseMarkdown(readFileSync("public/footer.md", "utf-8"));
  }

  const { markdown } = await create();

  return (
    <footer
      className="w-full text-white text-center"
      dangerouslySetInnerHTML={{ __html: markdown }}
    />
  );
};

export default Footer;
