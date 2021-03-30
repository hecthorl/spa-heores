import { Link } from 'react-router-dom';

const HeroCard = props => {
   const { image, name, biography } = props;

   // console.log(biography['first-appearance']);
   const sep = biography.aliases.map(e => `${e}, `);

   return (
      <li
         className="card ms-3 animate__animated animate__fadeInUp"
         style={{
            maxWidth: 540,
         }}
      >
         <div className="row no-gutters">
            <div className="col-md-4">
               <img src={image.url} className="card-img" alt={image.url} />
            </div>
            <div className="col-md-8">
               <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{sep}</p>
                  <p className="card-text">{biography['first-appearance']}</p>
                  <Link to={`./heroe/`}>Mas...</Link>
               </div>
            </div>
         </div>
      </li>
   );
};

export default HeroCard;
