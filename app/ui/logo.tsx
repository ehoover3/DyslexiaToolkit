import { lusitana } from '@/app/ui/fonts';

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="whitespace-nowrap text-[44px] md:whitespace-normal">
        Dyslexia Toolkit
      </p>
    </div>
  );
}
