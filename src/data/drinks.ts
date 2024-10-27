
type BartendersType = 'Alberto' | 'Jaylon'

export type DrinkType = {
  name: string;
  ingredients: string[];
  imageSrc: string;
  bartenders: BartendersType[];
}

export const drinkMenu: DrinkType[] = [
  {
    name: 'Moscow Mule',
    ingredients: ['Vodka', 'Ginger Beer', 'Lime Juice'],
    imageSrc: '/drinkImages/moscowMule.png',
    bartenders: ['Alberto', 'Jaylon']
  },
  {
    name: 'Tequila Sunrise',
    ingredients: ['Tequila', 'Orange Juice', 'Grenadine'],
    imageSrc: '/drinkImages/tequilaSunrise.png',
    bartenders: ['Alberto', 'Jaylon']
  },
  {
    name: 'Screwdriver',
    ingredients: ['Vodka', 'Orange Juice'],
    imageSrc: '/drinkImages/screwdriver.png',
    bartenders: ['Alberto', 'Jaylon']
  },
  {
    name: 'Kentucky Mule',
    ingredients: ['Whiskey', 'Ginger Beer', 'Lime'],
    imageSrc: '/drinkImages/kentuckyMule.avif',
    bartenders: ['Alberto', 'Jaylon']
  },
  {
    name: 'Cosmopolitan',
    ingredients: ['Triple Sec', 'Cranberry Juice', 'Lime Juice'],
    imageSrc: '/drinkImages/cosmopolitan.png',
    bartenders: ['Alberto']
  },
  {
    name: 'Vodka Cranberry',
    ingredients: ['Vodka', 'Cranberry Juice'],
    imageSrc: '/drinkImages/vodkaCran.png',
    bartenders: ['Alberto', 'Jaylon']
  },
  // {
  //   name: 'Mojito',
  //   ingredients: ['Rum', 'Mint', 'Lime', 'Simple Syrup', 'Soda Water'],
  //   imageSrc: '/drinkImages/mojito.png',
  //   bartenders: ['Alberto']
  // },
]