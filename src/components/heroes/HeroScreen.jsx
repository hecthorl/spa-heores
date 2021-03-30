import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HeroScreen = ({ history }) => {
   const [hero, setHero] = useState([]);
   const { heroeId } = useParams();

   useEffect(() => {
      const url = `https://akabab.github.io/superhero-api/api/id/${heroeId}.json`;
      fetch(url)
         .then(item => item.json())
         .then(resp => {
            setHero(resp);
         });
   }, [heroeId]);
   return (
      // <h1>holi</h1>
      <div className="row mt-5" style={{ overflowY: 'hidden' }}>
         <div className="col-4">
            <img
               src={hero.images?.lg}
               alt={`asdasd`}
               className="img-thumbnail animate__animated animate__fadeInDown"
            />
         </div>
         <div className="col-8 animate__animated animate__fadeInUp">
            <h3>{hero.name}</h3>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">
                  <b>Alter ego: </b>
                  {hero?.biography?.alterEgos || '-'}
               </li>
               <li className="list-group-item">
                  <b>Publisher: </b>
                  {hero?.biography?.publisher}
               </li>
               <li className="list-group-item">
                  <b>Primera Aparición: </b>
                  {hero?.biography?.firstAppearance}
               </li>
            </ul>
            <h5 className="mt-3">Characters:</h5>
            <p>{hero?.biography?.aliases}</p>
            <button
               onClick={() => history.goBack()}
               className="btn btn-outline-info"
            >
               Return
            </button>
         </div>
      </div>
   );
};

export default HeroScreen;
