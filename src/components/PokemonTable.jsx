import Table from 'react-bootstrap/Table';
const pokemons = require('json-pokemon');
const KANTO_PKMN_COUNT = 151;

function PokemonTable() {
	return (
		<Table variant="dark">
			<thead>
				<tr>
					<th className="id-col">ID</th>
					<th className="name-col">Name</th>
					<th className="type-col">Types</th>
				</tr>
			</thead>
			<tbody>
				{pokemons.map(
					(pokemon, index) =>
						index < KANTO_PKMN_COUNT && (
							<tr>
								<td>{pokemon.id}</td>
								<td>{pokemon.name}</td>
								<td>
									{pokemon.typeList.map((type) => (
										<>
											<span className={`${type.toLowerCase()}-type`}>
												{type}
											</span>{' '}
										</>
									))}
								</td>
							</tr>
						)
				)}
			</tbody>
		</Table>
	);
}

export default PokemonTable;
