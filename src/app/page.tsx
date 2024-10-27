import DrinkCard from '@/components/DrinkCard';
import { drinkMenu } from '@/data/drinks';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-start items-center p-10 gap-y-10">
      <div className="flex gap-x-4">
        <Image alt="Home Image" src={'/home.png'} width={75} height={75} />
        <h1 className="text-6xl font-bold">The Homie House Drink Menu </h1>
        <Image alt="Home Image" src={'/booze.png'} width={75} height={75} />
      </div>
      {/* <DrinkCard {...drinkMenu[0]} /> */}
      <section className="w-full h-full justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
          {drinkMenu.map((drink, index) => {
            return (
              <div key={index} className="flex justify-center items-center">
                <DrinkCard {...drink} />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
