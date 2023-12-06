import React from "react";
import CardBlog from "./CardBlog";

import { contentfulConfig } from "@/utils/config";

const { baseUrl, spaceId, accessToken, environtmentId } = contentfulConfig;

const getEntries = async () => {
  const response = await fetch(
    baseUrl +
      `/spaces/${spaceId}/environments/${environtmentId}/entries?access_token=${accessToken}&content_type=blog`,
    {
      next: {
        revalidate: 10,
      },
    },
  );
  return response.json();
};

const Blog = async () => {
  const entries = await getEntries();
  return (
    <main className="container mx-auto min-h-screen max-w-7xl px-4">
      <section className="mt-32 text-center">
        <h1 className="mb-4 font-mono text-4xl font-semibold text-tred lg:text-6xl">
          OUR <span className="text-secondary">WORK</span>
        </h1>
        <p>Where all our great things begin</p>
      </section>
      <section className="mt-20 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {entries.items.map((entry, index) => {
          return (
            <CardBlog key={index} data={entry} includes={entries.includes} />
          );
        })}
      </section>
    </main>
  );
};

export default Blog;
