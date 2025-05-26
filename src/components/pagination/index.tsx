//! Types
import { PaginationProps } from "../types";

//! React Paginate
import ReactPaginate from "react-paginate";

//! Styles 
import styles from './styles.module.css';

export default function Pagination({ pageCount, onPageChange }: PaginationProps) {
  return (
    <ReactPaginate
      previousLabel='<'
      nextLabel='>'
      marginPagesDisplayed={1}
      pageCount={pageCount}
      pageRangeDisplayed={1}
      onPageChange={onPageChange}
      containerClassName={styles.pagination}
      disabledClassName={styles.pagination__link__disabled}
      previousLinkClassName={styles.pagination__link}
      activeLinkClassName={styles.pagination__link__active}
      nextLinkClassName={styles.pagination__link}
      activeClassName={styles.pagination__active}
    />
  );
}