import { contentfulConfig } from "@/utils/config";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { format } from "date-fns";
import { Badge } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import { notFound } from "next/navigation";

const { baseUrl, spaceId, accessToken, environtmentId } = contentfulConfig;

const getEntriesBySlug = async (slug) => {
  const response = await fetch(
    baseUrl +
      `/spaces/${spaceId}/environments/${environtmentId}/entries?access_token=${accessToken}&content_type=blog&fields.slug=${slug}`,
    {
      next: {
        revalidate: 10,
      },
    },
  );
  return response.json();
};
const DetailBlog = async ({ params }) => {
  const entry = await getEntriesBySlug(params.slug);
  if (!entry.items.length) {
    notFound();
  }
  const date = format(
    new Date(entry.items[0].fields.createdAt),
    "dd MMMM yyyy",
  );
  //   console.log(entry.items[0].fields.thumbnail.sys.id);
  const idAsset = entry.items[0].fields.thumbnail.sys.id;
  const assets = entry.includes.Asset;
  const thumbnail = assets.find((asset) => asset.sys.id === idAsset);

  const idCategory = entry.items[0].fields.category.sys.id;
  const categories = entry.includes.Entry;
  const category = categories.find(
    (category) => category.sys.id === idCategory,
  );

  //   console.log(thumbnail.fields.file.url);

  const RICHTEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        return <p className="my-2 text-2xl font-semibold">{children}</p>;
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="font-light">{children}</p>;
      },
    },
  };

  return (
    <main className="container mx-auto min-h-screen max-w-6xl px-4 pt-24">
      <section>
        <Badge color="success" size="sm" className="w-fit">
          {category.fields.title}
        </Badge>
        <h1 className="my-2 text-5xl font-semibold">
          {entry.items[0].fields.title}
        </h1>
        <p className="mb-2">{date}</p>
        <div className="relative h-[200px] lg:h-[400px]">
          <Image
            fill
            alt="thumnaild"
            className="object-cover"
            src={`https:${thumbnail.fields.file.url}`}
          />
        </div>
      </section>

      <section className="pb-[100px]">
        {documentToReactComponents(
          entry.items[0].fields.content,
          RICHTEXT_OPTIONS,
        )}
      </section>
    </main>
  );
};

export default DetailBlog;
