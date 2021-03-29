import { heroes } from '../data/heroes';

const getHeroByPublisher = publisher => {
   const validPublisher = ['DC Comics', 'Marvel Comics'];

   if (!validPublisher.includes(publisher))
      return console.log('Publisher no valido');

   return heroes.filter(hero => hero.publisher === publisher);
};

export default getHeroByPublisher;
