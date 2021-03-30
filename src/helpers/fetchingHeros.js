const fetchingHeros = async keyword => {
   const url = `https://superheroapi.com/api.php/4413143712033348/search/${keyword}`;

   const res = await fetch(url);
   const { results } = await res.json();
   return results;
};

export default fetchingHeros;
