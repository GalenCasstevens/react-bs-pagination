import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	setActivePage,
	setPageItems,
} from '../features/pagination/paginationSlice';
import BSPagination from 'react-bootstrap/Pagination';

function Pagination() {
	const { pokemons } = useSelector((state) => state.pokemons);
	const { activePage, TOTAL_ITEMS_PER_PAGE } = useSelector(
		(state) => state.pagination
	);
	const totalPages = Math.ceil(pokemons.length / TOTAL_ITEMS_PER_PAGE);
	let items = [];

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setPageItems(pokemons.slice(0, TOTAL_ITEMS_PER_PAGE)));
	}, [dispatch]);

	const paginate = (pageNumber) => {
		const startIndex = (pageNumber - 1) * TOTAL_ITEMS_PER_PAGE;
		const endIndex = pageNumber * TOTAL_ITEMS_PER_PAGE;
		dispatch(setActivePage(pageNumber));
		dispatch(setPageItems(pokemons.slice(startIndex, endIndex)));
	};

	for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
		items.push(
			<span key={pageNumber} onClick={() => paginate(pageNumber)}>
				<BSPagination.Item key={pageNumber} active={pageNumber === activePage}>
					{pageNumber}
				</BSPagination.Item>
			</span>
		);
	}

	return (
		<div>
			<BSPagination>{items}</BSPagination>
		</div>
	);
}

export default Pagination;
