import { Avatar, Blockquote } from "flowbite-react";

export default function ReviewProduct() {
  return (
    <figure className="mx-auto max-w-screen-md py-36 text-center">
      <svg
        className="mx-auto mb-3 h-10 w-10 text-secondary"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <Blockquote>
        <p className="font-medium italic text-secondary lg:text-2xl">
          "Amarillo Digital Creative stands at the forefront of cutting-edge
          innovation, seamlessly blending creativity with technology. Our
          dynamic team specializes in crafting digital solutions that transcend
          conventional boundaries. From captivating design aesthetics to robust
          digital strategies, we redefine the digital landscape. Join us in
          shaping the future of creativity in the digital realm with Amarillo
          Digital Creative."
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center justify-center space-x-3">
        <div className="flex items-center divide-x-2 divide-gray-500 ">
          <cite className="pr-3 font-medium text-secondary">Micheal Gough</cite>
          <cite className="pl-3 text-sm text-secondary">CEO at Google</cite>
        </div>
      </figcaption>
    </figure>
  );
}
