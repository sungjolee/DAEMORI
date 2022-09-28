import React from "react";
import "./Pagination.scss";
import Pagination from "react-js-pagination";

function Paging({ page, count, setPage }) {
  // const [page, setPage] = useState(1);
  console.log(page, count, setPage);
  return (
    <Pagination
      activePage={page} // 현재 페이지
      itemsCountPerPage={15} // 한 페이지랑 보여줄 아이템 갯수
      totalItemsCount={count} // 총 아이템 갯수
      pageRangeDisplayed={5} // paginator의 페이지 범위
      prevPageText="‹" // "이전"을 나타낼 텍스트
      nextPageText="›" // "다음"을 나타낼 텍스트
      onChange={setPage} // 페이지 변경을 핸들링하는 함수
    />
  );
}

export default Paging;
