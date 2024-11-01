import Image from 'next/image';
import InfoImage from '../public/info_image.png';
import data from '../data/indes.json';
import Link from 'next/link';

export default function InfoSection() {
  return (
    <section className="relative py-20 min-h-screen">
      {/* Fondo inclinado */}
      <div className="absolute inset-0 transform -skew-y-12 bg-[#f9b800]"></div>

      {/* Contenido */}
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2 order-2 md:order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-4xl">{data.section.title}</h2>
              <h6 className="underline">{data.section.subtitle}</h6>
              <p className="text-black/80 max-w-md">{data.section.text}</p>
              <Link
                className="inline-flex items-center place-content-center text-2xl px-14 md:w-auto w-full  py-4 bg-black text-white rounded-full hover:bg-black/90 transition-colors"
                href="/"
              >
                {data.section.button} ➞
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 md:order-1 lg:order-2">
            <Image
              src={InfoImage}
              alt="Chat illustration"
              width={500}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
