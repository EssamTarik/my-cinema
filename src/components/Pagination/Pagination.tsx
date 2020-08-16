import React from "react";
import cn from "classnames";
import { FormattedMessage } from "react-intl";
import { IProps } from "./interfaces";
import "./styles.css";

const Pagination = ({
  page,
  totalPages,
  onNextClick,
  onPreviousClick,
}: IProps) => {
  const isLastPage = page === totalPages;
  const isFirstPage = page === 1;

  return (
    <div className="pagination">
      <div className="pagination__prev-container">
        <button
          type="button"
          onClick={onPreviousClick}
          disabled={isFirstPage}
          className={cn("pagination__btn")}
        >
          <FormattedMessage id="pagination.previous" />
        </button>
      </div>
      <div className="pagination__next-container">
        <button
          type="button"
          onClick={onNextClick}
          disabled={isLastPage}
          className={cn("pagination__btn")}
        >
          <FormattedMessage id="pagination.next" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
