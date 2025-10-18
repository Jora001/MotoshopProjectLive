// app/about/page.tsx
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/first.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
};

export default AboutPage;
