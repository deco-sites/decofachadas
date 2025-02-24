import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { JSX } from "preact";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
}

function Footer({
  image =
    "",
  href = "",
  text = "Made with",
  alt = "Made with ",
  height = 20,
  width = 50,
}: Props): JSX.Element | null {
  return (
    <div class="py-8 lg:px-0 px-6">
      <a
        href={href}
        class="flex flex-row gap-1 items-center justify-center text-xs"
        target="_blank"
      >
        {text && <p>{text}</p>}
        {image && (
          <Image
            src={image || ""}
            alt={alt || ""}
            height={height || 20}
            width={width || 50}
          />
        )}
      </a>
    </div>
  );
}

export default Footer;
