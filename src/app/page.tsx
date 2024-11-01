import { CardSection } from '@/components/CardSection';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import { fetchColorByName, fetchServicesByColor } from '@/lib/get-data';

export default async function Home() {
  const defaultColor = await fetchColorByName('yellow');
  const services = await fetchServicesByColor(defaultColor[0].id);

  return (
    <main
      style={{
        backgroundColor: `#${defaultColor[0].attributes.hex}`,
        color: '#000',
        height: '100%',
      }}
    >
      <Header />
      <Hero />
      <InfoSection />
      <CardSection
        services={services}
        colorName={defaultColor[0].attributes.name}
      />
    </main>
  );
}
