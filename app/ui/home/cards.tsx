import {
  BeakerIcon,
  PlayCircleIcon,
  SpeakerWaveIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  simulation: BeakerIcon,
  reader: SpeakerWaveIcon,
  books: PlayCircleIcon,
  font: ChatBubbleLeftEllipsisIcon,
};

export default async function CardWrapper() {
  return (
    <>
      <Card title="Dyslexia Simulation" value={1} type="simulation" />
      <Card title="Screen Reader" value={1} type="reader" />
      <Card title="Audio Books" value={2} type="books" />
      <Card title="Font Choice" value={3} type="font" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'simulation' | 'reader' | 'books' | 'font';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
