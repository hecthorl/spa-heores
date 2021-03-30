const fetchingHeros = async keyword => {
   const url = `https://akabab.github.io/superhero-api/api/all.json`;

   const res = await fetch(url);

   const data = await res.json();

   return data;
};

export default fetchingHeros;
