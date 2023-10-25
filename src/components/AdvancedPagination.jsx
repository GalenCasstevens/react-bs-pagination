import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	setActivePage,
	setPageItems,
} from '../features/pagination/paginationSlice';
import BSPagination from 'react-bootstrap/Pagination';

function AdvancedPagination() {
	const { pokemons } = useSelector((state) => state.pokemons);
	const { activePage, TOTAL_ITEMS_PER_PAGE } = useSelector(
		(state) => state.pagination
	);
	const totalPages = Math.ceil(pokemons.length / TOTAL_ITEMS_PER_PAGE);
	const isCurrentPageFirst = activePage === 1;
	const isCurrentPageLast = activePage === totalPages;
	let isPageNumberOutOfRange;

	const dispatch = useDispatch();

	const paginate = (pageNumber) => {
		const startIndex = (pageNumber - 1) * TOTAL_ITEMS_PER_PAGE;
		const endIndex = pageNumber * TOTAL_ITEMS_PER_PAGE;
		dispatch(setActivePage(pageNumber));
		dispatch(setPageItems(pokemons.slice(startIndex, endIndex)));
	};

	const onFirstPageClick = () => {
		paginate(1);
	};

	const onPreviousPageClick = () => {
		paginate(activePage - 1);
	};

	const onNextPageClick = () => {
		paginate(activePage + 1);
	};

	const onLastPageClick = () => {
		paginate(totalPages);
	};

	const setLastPageAsCurrent = () => {
		if (activePage > totalPages) {
			dispatch(setActivePage(totalPages));
		}
	};

	useEffect(() => {
		setLastPageAsCurrent();
		dispatch(setPageItems(pokemons.slice(0, TOTAL_ITEMS_PER_PAGE)));
	}, [totalPages, dispatch]);

	const pageNumbers = [...new Array(totalPages)].map((_, index) => {
		const pageNumber = index + 1;
		const isPageNumberFirst = pageNumber === 1;
		const isPageNumberLast = pageNumber === totalPages;
		const isCurrentPageWithinTwoPageNumbers =
			Math.abs(pageNumber - activePage) <= 2;
		const isPageDivisibleByTen = pageNumber % 10 === 0;

		if (
			isPageNumberFirst ||
			isPageNumberLast ||
			isCurrentPageWithinTwoPageNumbers
		) {
			return (
				<BSPagination.Item
					key={pageNumber}
					onClick={() => paginate(pageNumber)}
					active={pageNumber === activePage}
				>
					{pageNumber}
				</BSPagination.Item>
			);
		}

		if (isPageDivisibleByTen) {
			return (
				<BSPagination.Item
					key={pageNumber}
					onClick={() => paginate(pageNumber)}
					active={pageNumber === activePage}
				>
					{pageNumber}
				</BSPagination.Item>
			);
		}

		return null;
	});

	return (
		<>
			<BSPagination>
				<BSPagination.First
					onClick={onFirstPageClick}
					disabled={isCurrentPageFirst}
				/>
				<BSPagination.Prev
					onClick={onPreviousPageClick}
					disabled={isCurrentPageFirst}
				/>
				{pageNumbers}
				<BSPagination.Next
					onClick={onNextPageClick}
					disabled={isCurrentPageLast}
				/>
				<BSPagination.Last
					onClick={onLastPageClick}
					disabled={isCurrentPageLast}
				/>
			</BSPagination>
		</>
	);
}

export default AdvancedPagination;
