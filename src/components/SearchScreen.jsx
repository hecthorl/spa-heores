// import { useState } from 'react';
import { useEffect, useState } from 'react';
// import fetchingHeros from '../helpers/fetchingHeros';
// import getHeroByName from '../selector/getHeroByName';
import HeroCard from './heroes/HeroCard';

const SearchScreen = ({ history, location }) => {
   const [input, setInput] = useState('');
   const [srch, setSrch] = useState([]);
   const params = new URLSearchParams(location.search);

   const middle = () => {
      for (const parametro of params.values()) return parametro;
   };

   const that = middle();
   // console.log(that);
   // const heroesFiltered = getHeroByName(middle());

   useEffect(() => {
      const url = `https://superheroapi.com/api.php/4413143712033348/search/${that}`;
      fetch(url)
         .then(res => res.json())
         .then(data => {
            console.log(data.results);
            setSrch(data.results);
         });
   }, [that]);

   // console.log();
   // const rr = async () => {
   //    const url = `https://superheroapi.com/api.php/4413143712033348/search/${that}`;
   //    const results = await fetch(url);
   //    return
   // };
   // rr();

   const handleSubmit = event => {
      event.preventDefault();
      const newInput = input.trim();
      if (!newInput) return console.log('Este campo es requerido');

      history.push(`?q=${newInput}`);
      setInput('');
   };
   return (
      <div>
         <h1>Search Screen</h1>
         <hr />
         <div className="row">
            <div className="col-5">
               <h4>Search Form</h4>
               <hr />
               <form onSubmit={handleSubmit} className="form-group">
                  <input
                     type="text"
                     value={input}
                     onChange={e => setInput(e.target.value)}
                     className="form-control"
                  />
                  <button
                     type="submit"
                     className="btn mt-3 btn-primary btn-block"
                  >
                     Search
                  </button>
               </form>
            </div>
            <div className="col-7">
               <h4>Resultados</h4>
               <hr />
               {srch?.map(item => (
                  <HeroCard key={item.id} {...item} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default SearchScreen;
