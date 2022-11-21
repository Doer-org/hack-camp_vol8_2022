import { PeaceIcon } from '../icon/PeaceIcon';

export const Header = () => {
  return (
    <div className="py-6 lg:py-4 text-stone-800 flex-none text-black-800 text-3xl md:text-5xl font-bold gap-2.5">
      <div className="flex items-center justify-center">
        <PeaceIcon />
        Warikan Generator
      </div>
    </div>
  );
};
