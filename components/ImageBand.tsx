import Image from "next/image";

export default function ImageBand({
  src,
  alt,
  position = "center center",
  height = "clamp(260px, 48vw, 560px)",
  priority = false,
}: {
  src: string;
  alt: string;
  position?: string;
  height?: string;
  priority?: boolean;
}) {
  return (
    <figure className="w-full m-0 hairline-t hairline-b">
      <div className="img-frame w-full" style={{ height }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          style={{ objectPosition: position }}
          sizes="100vw"
        />
      </div>
    </figure>
  );
}
