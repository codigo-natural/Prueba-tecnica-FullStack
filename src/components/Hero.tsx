import Image from 'next/image';
import HeroImage from '../public/hero.png';
import Icon from '../public/check_circle.png';
import data from '../data/indes.json';

export const Hero = () => {
  return (
    <section className="container mx-auto px-4 mb-10">
      <div className="flex flex-col md:flex-col lg:flex-row gap-8 items-center">
        {/* Texto y Título */}
        <div className="w-full lg:w-1/2 order-2 md:order-2 lg:order-1">
          <div className="flex flex-col justify-center space-y-4 max-w-xl">
            <p className="text-lg text-yellow-500 font-semibold">
              {data.header.subtitle}
            </p>
            <h1 className="text-6xl text-gray-800 leading-tight">
              {data.header.title}
            </h1>
            <ul className="flex flex-wrap pt-10 gap-y-4 gap-x-4 max-w-40 md:max-w-64 sm:max-w-64 lg:max-w-64">
              {data.header.stack_tech.map((tech) => (
                <li key={tech}>
                  <span className="bg-white text-gray-800 py-2 px-4 rounded-full shadow-md font-medium flex gap-1">
                    <Image src={Icon} alt="icon" width={26} height={26} />{' '}
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Imagen Hero */}
        <div className="w-full lg:w-1/2 order-1 md:order-1 lg:order-2">
          <Image
            src={HeroImage}
            alt="hero"
            width={500}
            height={400}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};
