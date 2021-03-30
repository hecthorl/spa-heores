import { useMemo } from 'react';
import getHeroByPublisher from '../../selector/getHeroByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {
   const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

   return (
      <ul className="card-columns">
         {heroes.map(hero => (
            <HeroCard key={hero.id} {...hero} />
         ))}
      </ul>
   );
};

export default HeroList;
