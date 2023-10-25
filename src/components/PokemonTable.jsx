import { useSelector, useDispatch } from 'react-redux';
import AdvancedPagination from './AdvancedPagination';
import Table from 'react-bootstrap/Table';

function PokemonTable() {
	const { pageItems } = useSelector((state) => state.pagination);

	if (pageItems || pageItems.length > 0) {
		return (
			<>
				<Table variant="dark">
					<thead>
						<tr>
							<th className="id-col">
								<span className="pokemon-id">ID</span>
							</th>
							<th className="name-col">Name</th>
							<th className="type-col">Types</th>
						</tr>
					</thead>
					<tbody>
						{pageItems.map((pokemon) => (
							<tr>
								<td>
									<span className="pokemon-id">{pokemon.id}</span>
								</td>
								<td>{pokemon.name}</td>
								<td>
									{pokemon.typeList.map((type) => (
										<>
											<span className={`type ${type.toLowerCase()}-type`}>
												{type}
											</span>{' '}
										</>
									))}
								</td>
							</tr>
						))}
					</tbody>
				</Table>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<AdvancedPagination />
				</div>
			</>
		);
	}

	return <p>No Data</p>;
}

export default PokemonTable;
