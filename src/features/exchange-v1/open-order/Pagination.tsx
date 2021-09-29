import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";

import { FC } from "react";
import { classNames } from "../../../functions";

interface PaginationProps {
  currentPage: number;
  onChange: (page: number) => void;
  totalPages: number;
  pageNeighbours: number;
}

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const Pagination: FC<PaginationProps> = ({
  totalPages,
  onChange,
  currentPage,
  pageNeighbours,
}) => {
  const getPageNumbers = () => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  const pages = getPageNumbers().reduce(
    (acc, page, index) => {
      if (page === LEFT_PAGE)
        acc[0].push(
          <button
            key={index}
            onClick={() => onChange(currentPage - pageNeighbours * 2 - 1)}
            className={classNames(
              page === currentPage ? "text-blue" : "",
              "cursor-pointer border-transparent px-4 pt-4 inline-flex items-center text-sm font-bold text-secondary hover:text-opacity-100 text-opacity-80"
            )}
          >
            <ArrowNarrowLeftIcon className="mr-3 h-5 w-5" aria-hidden="true" />
            Previous
          </button>
        );

      if (page === RIGHT_PAGE)
        acc[2].push(
          <button
            key={index}
            onClick={() => onChange(currentPage + pageNeighbours * 2 + 1)}
            className={classNames(
              page === currentPage ? "text-blue" : "",
              "cursor-pointer border-transparent px-4 pt-4 inline-flex items-center text-sm font-bold text-secondary hover:text-opacity-100 text-opacity-80"
            )}
          >
            Next
            <ArrowNarrowRightIcon className="ml-3 h-5 w-5" aria-hidden="true" />
          </button>
        );

      acc[1].push(
        <button
          key={index}
          onClick={() => onChange(page)}
          className={classNames(
            page === currentPage ? "text-blue" : "",
            "cursor-pointer border-transparent px-4 pt-4 inline-flex items-center text-sm font-bold text-secondary hover:text-opacity-100 text-opacity-80"
          )}
        >
          {page}
        </button>
      );

      return acc;
    },
    [[], [], []]
  );

  return totalPages > 1 ? (
    <nav className="px-4 flex items-center justify-between sm:px-0">
      <div className="-mt-px w-0 flex-1 flex">{pages[0]}</div>
      <div className="hidden md:-mt-px md:flex">{pages[1]}</div>
      <div className="-mt-px w-0 flex-1 flex justify-end">{pages[2]}</div>
    </nav>
  ) : (
    <></>
  );
};

export default Pagination;
