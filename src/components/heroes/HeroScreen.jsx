import { useMemo } from 'react';
import { useParams } from 'react-router';
import getHeroById from '../../selector/getHeroesById';

const HeroScreen = ({ history }) => {
   const { heroeId } = useParams();

   const {
      superhero,
      publisher,
      alter_ego,
      first_appearance,
      characters,
   } = useMemo(() => getHeroById(heroeId), [heroeId]);
   return (
      <div className="row mt-5" style={{ overflowY: 'hidden' }}>
         <div className="col-4">
            <img
               src={`../assets/${heroeId}.jpg`}
               alt={`../assets/${heroeId}.jpg`}
               className="img-thumbnail animate__animated animate__fadeInDown"
            />
         </div>
         <div className="col-8 animate__animated animate__fadeInUp">
            <h3>{superhero}</h3>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">
                  <b>Alter ego: </b>
                  {alter_ego}
               </li>
               <li className="list-group-item">
                  <b>Publisher: </b>
                  {publisher}
               </li>
               <li className="list-group-item">
                  <b>Primera Aparición: </b>
                  {first_appearance}
               </li>
            </ul>
            <h5 className="mt-3">Characters:</h5>
            <p>{characters}</p>
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
