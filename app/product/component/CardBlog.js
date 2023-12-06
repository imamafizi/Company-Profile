import { format } from "date-fns";
import { Badge, Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { HiClock } from "react-icons/hi";

export default function CardBlog({ data, includes }) {
  const idAsset = data.fields.thumbnail.sys.id;
  const assets = includes.Asset;
  const thumbnail = assets.find((asset) => asset.sys.id === idAsset);

  const idCategory = data.fields.category.sys.id;
  const categories = includes.Entry;
  const category = categories.find(
    (category) => category.sys.id === idCategory,
  );

  const date = format(new Date(data.fields.createdAt), "dd MMMM yyyy");
  // console.log(thumbnail.fields.file.url);
  return (
    <Link href={`/product/${data.fields.slug}`}>
      <Card className="max-w-sm  ">
        <div className="relative h-[190px]">
          <Image
            fill
            src={`https:${thumbnail.fields.file.url}`}
            alt="thumbnaild pict"
            className="object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Badge color="success" size="sm" className="w-fit">
            {category.fields.title}
          </Badge>
          <Badge icon={HiClock} color="gray" size="sm" className="w-fit">
            {date}
          </Badge>
        </div>
        <h5 className=" line-clamp-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {data.fields.title}
        </h5>
        <p className="line-clamp-4 font-normal text-gray-700 ">
          {data.fields.description}
        </p>
      </Card>
    </Link>
  );
}
