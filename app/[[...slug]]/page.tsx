import AboutUs from "@/components/templates/about-us";
import { create, walk } from "@/lib/server_utils";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { slug: string[] } }) => {
    const { data, markdown, error } = await create(params);

    if (error || !data || !markdown) {
        return notFound();
    }

    return (
        <>
            {!params.slug && (
                <div className="mb-8">
                    <AboutUs />
                </div>
            )}
            {data.thumbnail && (
                <div className="mb-8 h-80 bg-swirl -mx-[50%] bg-black flex flex-col gap-6 justify-center overflow-hidden">
                    <img src={data.thumbnail} alt={data.title} className=" object-cover w-full blur-sm" />
                </div>
            )}
            <div>
                <div className="markdown-body">
                    <article dangerouslySetInnerHTML={{ __html: markdown }} />
                </div>
            </div>
        </>
    );
};

export default Page;

export async function generateStaticParams() {
    const slugs = [];

    for await (const file of walk("public/")) {
        if (file.endsWith(".md")) {
            const slug = file.replace("public/", "").replace(".md", "").split("/");
            slugs.push({ slug });

            if (slug[slug.length - 1] === "index") {
                slugs.push({ slug: slug.slice(0, -1) });
            }
        }
    }

    return slugs;
}
