'use client'

import React, { useMemo, useContext } from "react";
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
import GlobalFilter from "./GlobalFilter";
import { IoMdClose } from "react-icons/io";
import styles from "./TransactionsTable.module.scss"
import { transactionNotActive } from "@/components/contexts/siteStates/SiteDispatchActions";
import SiteContext from "@/components/contexts/siteStates/SiteContext";

function TransactionsTable({DATA, COLUMNS}) {
  const homeContxt = useContext(SiteContext)

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);
  const {
     getTableProps,
     getTableBodyProps,
     headerGroups, page,
     nextPage, previousPage,
     canPreviousPage,
     canNextPage, prepareRow,
     state, setGlobalFilter,
     pageOptions,
     gotoPage,
     pageCount
    }
   = useTable({
    columns: columns,
    data: data,
  }, useGlobalFilter, useSortBy, usePagination);


  const { pageIndex } = state

   
  const { globalFilter } = state
  return (
    <div className={styles.container}>
      <div className={styles.closeBtn}>
        <button onClick={()=> homeContxt.dispatch(transactionNotActive())}><i><IoMdClose /></i> Close Recent Transactions</button>

      </div>
        <div className={styles.tableTopSearchBar}>
            <div className={styles.topSearchBarTitle}>
                <h1>Latest Transactions</h1>
            </div>
            <div className={styles.topSearchBarSearch}>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            </div>
        </div>
        <div className={styles.tableContainer}>
    <table {...getTableProps} className={styles.table}>
  <tbody className={styles.tableBody}>
    {page.map((row, index) => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()} key={index} className={styles.tableRow}>
          {row.cells.map((cell, cellIndex) => {
            return (
              <td {...cell.getCellProps()} className={styles.tableData} key={cellIndex}>
                <div className={styles.topHeaderContent}>
                  <p>{headerGroups[0].headers[cellIndex].render("Header")}</p>
                </div>
                <div className={styles.topHeaderDesc}>
                    <p>{cell.render("Cell")}</p>
                </div>
              </td>
            );
          })}
        </tr>
      );
    })}
  </tbody>
</table>

<div className={styles.navigationButtons}>
    <div className={styles.navd}>
        <p>
        Page
        <strong>
            {pageIndex + 1} of {pageOptions.length}
        </strong>
        </p>
        
    </div>
    <div className={styles.buttonGroup}>
    <button onClick={()=> previousPage()} disabled={!canPreviousPage}>Prev</button>
    <button onClick={()=> nextPage()} disabled={!canNextPage}>Next</button>
    </div>
</div>
</div>

    </div>
  );
}

export default TransactionsTable;