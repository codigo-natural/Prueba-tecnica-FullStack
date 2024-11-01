'use client';

import Image from 'next/image';
import Logo from '../public/logo.webp';
import data from '../data/indes.json';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { deleteLastService } from '@/lib/get-data';

interface ServiceAttributes {
  title: string;
  description: string;
  color: Color;
}

interface Color {
  id: string;
  name: string;
  hex: string;
}

interface Service {
  id: string;
  attributes: ServiceAttributes;
}

interface CardSectionProps {
  services: Service[];
  colorName: string;
}

export const CardSection: React.FC<CardSectionProps> = ({
  services,
  colorName,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [localServices, setLocalServices] = useState<Service[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (services) {
      setLocalServices(services);
    }
  }, [services]);

  const handleDelete = async () => {
    if (isDeleting || localServices.length === 0) return;

    try {
      setIsDeleting(true);
      const lastService = localServices[localServices.length - 1];

      await deleteLastService(lastService.attributes.color.id);

      // Actualizamos el estado para reflejar la eliminación del último servicio
      setLocalServices(localServices.slice(0, -1));
    } catch (error) {
      console.error('Error deleting last service:', error);
    } finally {
      setIsDeleting(false);
      router.refresh();
    }
  };

  return (
    <section className="relative py-20 min-h-screen flex">
      {/* Fondo inclinado */}
      <div className="absolute bg-gray-900 inset-0 transform -skew-y-12"></div>

      {/* Contenido */}
      <div className="relative container mx-auto px-8 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 space-x-8 items-center">
        <div className="items-center place-content-center">
          <h3 className="text-5xl max-w-[315px] text-white">
            {data.card.title} {colorName}
          </h3>
          <button
            onClick={handleDelete}
            disabled={isDeleting || localServices.length === 0}
            className="mt-4 bg-slate-100 text-black px-4 py-2 rounded-full"
          >
            {isDeleting ? 'Eliminando...' : data.card.button}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 gap-y-12">
          {/* Tarjetas dinámicas */}
          {localServices.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-[60px] p-4 transform ${
                index % 4 === 0 || index % 4 === 3
                  ? 'bg-white'
                  : 'bg-yellow-500'
              } ${
                index % 4 === 0 || index % 4 === 3
                  ? '-translate-x-4 -translate-y-4'
                  : '-translate-x-4 translate-y-4'
              }`}
            >
              <div className="p-8">
                <picture>
                  <Image src={Logo} alt="logo" width={100} height={100} />
                </picture>
                <p className="text-4xl mt-4">{index + 1}.</p>
                <h3 className="font-bold mb-2">{service.attributes.title}</h3>
                <p>{service.attributes.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
