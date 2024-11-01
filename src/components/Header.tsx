import Image from 'next/image';
import Logo from '../public/logo.webp';

export const Header = () => {
  return (
    <header className="bg-light_lellow pt-8">
      <Image
        src={Logo}
        alt="logo"
        width={100}
        height={25}
        className="mx-24 rounded-md"
      />
    </header>
  );
};
