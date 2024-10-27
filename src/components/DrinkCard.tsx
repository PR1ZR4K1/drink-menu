import { DrinkType } from '@/data/drinks';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

export default function DrinkCard(drink: DrinkType) {
  return (
    <Card className="dark py-4 w-[350px] h-[400px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-2xl">{drink.name}</h4>
      </CardHeader>
      <CardBody className="flex items-center overflow-visible py-2 gap-y-1">
        <Image
          alt="Card background"
          className="rounded-xl"
          src={drink.imageSrc}
          width={290}
          height={230}
        />
        <div className="w-[95%] flex flex-wrap italic gap-x-1 text-large">
          <span className="font-semibold">{'Ingredients: '}</span>
          {drink.ingredients.map((ingredient, index) => {
            return (
              <div key={index}>
                {ingredient}
                <span>{index !== drink.ingredients.length - 1 && ','}</span>
              </div>
            );
          })}
        </div>
        <p className="w-[95%] font-semibold text-xl">
          {drink.bartenders.length > 1 ? `Bartenders: ` : `Bartender: `}
          <span>
            {drink.bartenders.length > 1
              ? `${drink.bartenders[0]} and ${drink.bartenders[1]}`
              : `${drink.bartenders[0]}`}
          </span>
        </p>
      </CardBody>
    </Card>
  );
}
