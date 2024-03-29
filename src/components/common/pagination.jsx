import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = (props) => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const page = _.range(1, pagesCount + 1);

    return <nav>
        <ul className="pagination">
            {page.map(page => <li key={page} className={page === currentPage ? "page-item active" : "page-item"}><a href="#" className="page-link" onClick={() => onPageChange(page)}>{page}</a></li>)}
        </ul>
    </nav>;
}

export default Pagination;