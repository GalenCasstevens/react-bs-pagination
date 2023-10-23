import Container from 'react-bootstrap/Container';
import PokemonTable from './components/PokemonTable';
import Pagination from './components/Pagination';

function App() {
	return (
		<Container>
			<PokemonTable />
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<Pagination />
			</div>
		</Container>
	);
}

export default App;
