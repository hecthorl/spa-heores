import { useEffect, useState } from 'react';
import fetchingHeros from '../../helpers/fetchingHeros';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {
   const [heroes, setHeroes] = useState([]);
   // const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);
   useEffect(() => {
      fetchingHeros()
         .then(res => {
            // const arr = res.slice(0, 10);
            // arr.map(item => {
            //    console.log(item.biography.publisher );
            // });
            const dcMarvel = res.filter(
               item => item.biography.publisher === publisher
            );
            const arr = dcMarvel.slice(0, 10);
            setHeroes(arr);
         })
         .catch(e => console.log(e));
   }, [publisher]);

   return (
      <ul className="card-columns">
         {heroes.map(hero => (
            <HeroCard key={hero.id} {...hero} />
         ))}
      </ul>
   );
};

export default HeroList;
