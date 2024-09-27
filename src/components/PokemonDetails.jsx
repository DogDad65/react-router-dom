import { useParams } from "react-router-dom";

// src/components/PokemonDetails.jsx
const PokemonDetails = (props) => {
  console.log(props);

  const { pokemonId } = useParams();
  console.log(pokemonId); // Expected output: '1'

  const singlePokemon = props.pokemon.find(
    (poke) => poke._id === Number(pokemonId)
  );

  // Always verify that any props are being passed correctly!
  return (
    <>
      <h2>{singlePokemon.name}</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
