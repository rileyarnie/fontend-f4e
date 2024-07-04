"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IProps {
  totalPages: number;
  currentPage: number;
}

const StudentPagination = ({ totalPages, currentPage }: IProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = (event: any, item: number) => {
    event.preventDefault();
  };
  return (
    <Pagination>
      {/* {console.log("currentPage", currentPage)}{" "} */}
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`/?page=${currentPage - 1}`}
            tabIndex={currentPage <= 1 ? -1 : undefined}
            className={
              currentPage <= 1 ? "pointer-events-none opacity-50" : undefined
            }
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (item, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={(e) => handleClick(e, item)}
                href={`/?page=${item}`}
                isActive
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationNext
            href={`/?page=${currentPage || 1 + 1}`}
            tabIndex={currentPage <= 1 ? -1 : undefined}
            className={
              currentPage >= totalPages
                ? "pointer-events-none opacity-50"
                : undefined
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default StudentPagination;
