import BSPagination from 'react-bootstrap/Pagination';

function Pagination() {
	let active = 2;
	let items = [];
	for (let number = 1; number <= 5; number++) {
		items.push(
			<BSPagination.Item key={number} active={number === active}>
				{number}
			</BSPagination.Item>
		);
	}

	return (
		<div>
			<BSPagination>{items}</BSPagination>
		</div>
	);
}

export default Pagination;
