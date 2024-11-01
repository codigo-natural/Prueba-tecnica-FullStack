import { CardSection } from '@/components/CardSection';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import { fetchColorByName, fetchServicesByColor } from '@/lib/get-data';
import { notFound } from 'next/navigation';

export default async function page({ params }: { params: { color: string } }) {
  const color = await fetchColorByName(params?.color);
  if (!color || color.length === 0) {
    notFound();
  }

  const services = await fetchServicesByColor(color[0].id);

  return (
    <main style={{ backgroundColor: `#${color[0].attributes.hex}` }}>
      <Header />
      <Hero />
      <InfoSection />
      <CardSection services={services} colorName={color[0].attributes.name} />
    </main>
  );
}
