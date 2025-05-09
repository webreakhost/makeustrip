import React from 'react';

const Pagination = () => {
  return (
    <div className=''>
        <div className="col-xl-4 col-lg-5 col-12 ">
      <div className="pags card py-2 px-5 mt-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination m-0 p-0">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">
                  <i className="fa-solid fa-arrow-left-long"></i>
                </span>
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    </div>
    
  );
};

export default Pagination;

