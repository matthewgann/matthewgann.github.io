import Image from "next/image";

export default function ImageBand({
  src,
  alt,
  position = "center center",
}: {
  src: string;
  alt: string;
  position?: string;
}) {
  return (
    <div className="w-full relative overflow-hidden" style={{ height: "420px" }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition: position }}
        sizes="100vw"
      />
      <div className="absolute inset-0" style={{ background: "rgba(28, 25, 23, 0.25)" }} />
    </div>
  );
}
