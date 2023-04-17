import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import "./styles/Content.css";

export const Content = () => {
  const data = [
    {
      name: "Odis Rhinehart",
      level: "Warga",
      fav: "Chicken & Ribs Combo",
      total: "IDR 194,700",
    },
    {
      name: "Kris Roher",
      level: "Warga",
      fav: "Surf & Turf Gift Basket",
      total: "IDR 631,200",
    },
    {
      name: "Serenity Fisher",
      level: "Juragan",
      fav: "Fried Chicken Dinne",
      total: "IDR 1,040.920",
    },
    {
      name: "Brooklyn Warren",
      level: "Sultan",
      fav: "Surf & Turf Gift Basket",
      total: "IDR 730,500",
    },
    {
      name: "Franco Delort",
      level: "Juragan",
      fav: "Chicken & Ribs Combo",
      total: "IDR 96,000",
    },
    {
      name: "Saul Geoghegan",
      level: "Juragan",
      fav: "Surf & Turf Gift Basket",
      total: "IDR 256,000",
    },
    {
      name: "Alfredo Vetrovs",
      level: "Juragan",
      fav: "Dark & Stormy",
      total: "IDR 590,080",
    },
    {
      name: "Cristofer Vetrovs",
      level: "Konglomerat",
      fav: "Shaking Beef Tri-Tip",
      total: "IDR 782,600",
    },
    {
      name: "Calvin Steward",
      level: "Konglomerat",
      fav: "BBQ Rib Dinner",
      total: "IDR 467,500",
    },
    {
      name: "Calvin Steward",
      level: "Konglomerat",
      fav: "BBQ Rib Dinner",
      total: "IDR 467,500",
    },
  ];
  return (
    <>
      <Col xl={9}>
        <Container>
          <Row className="banner">
            <h2>Customer</h2>
            <div className="description">
              On this menu you will be able to create, edit, and also delete the
              customer. Also you can manage it easily.
            </div>
            <Container className="p-0">
              <Row>
                <Col md={4} lg={4} xl={4} xxl={3}>
                  <Button className="add-btn">+ Add New Customer</Button>
                </Col>
                <Col md={8} lg={8} xl={8} xxl={4} className="search-wrapper">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.66668 14.5C11.1645 14.5 14 11.6645 14 8.16666C14 4.66886 11.1645 1.83333 7.66668 1.83333C4.16887 1.83333 1.33334 4.66886 1.33334 8.16666C1.33334 11.6645 4.16887 14.5 7.66668 14.5Z"
                      stroke="#D1D0D3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M14.6667 15.1667L13.3333 13.8333"
                      stroke="#D1D0D3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Search Customer"
                  />
                  <Button variant="primary">Search</Button>
                </Col>
                <Col md={2} lg={2} xl={2} xxl={2}>
                  <button className="filter-btn">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.6 1.89999H12.4C13.1333 1.89999 13.7333 2.49999 13.7333 3.23333V4.69999C13.7333 5.23333 13.4 5.89999 13.0667 6.23333L10.2 8.76666C9.8 9.09999 9.53333 9.76666 9.53333 10.3V13.1667C9.53333 13.5667 9.26667 14.1 8.93333 14.3L8 14.9C7.13333 15.4333 5.93333 14.8333 5.93333 13.7667V10.2333C5.93333 9.76666 5.66667 9.16666 5.4 8.83333L2.86667 6.16666C2.53333 5.83333 2.26667 5.23333 2.26667 4.83333V3.29999C2.26667 2.49999 2.86667 1.89999 3.6 1.89999Z"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{" "}
                      Filter
                    </svg>{" "}
                    Filter
                  </button>
                  <button className="foreground">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.6 1.89999H12.4C13.1333 1.89999 13.7333 2.49999 13.7333 3.23333V4.69999C13.7333 5.23333 13.4 5.89999 13.0667 6.23333L10.2 8.76666C9.8 9.09999 9.53333 9.76666 9.53333 10.3V13.1667C9.53333 13.5667 9.26667 14.1 8.93333 14.3L8 14.9C7.13333 15.4333 5.93333 14.8333 5.93333 13.7667V10.2333C5.93333 9.76666 5.66667 9.16666 5.4 8.83333L2.86667 6.16666C2.53333 5.83333 2.26667 5.23333 2.26667 4.83333V3.29999C2.26667 2.49999 2.86667 1.89999 3.6 1.89999Z"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{" "}
                      Filter
                    </svg>{" "}
                    Filter
                  </button>
                </Col>
                <Col md={2} lg={2} xl={2} xxl={2}>
                  <button className="refresh-btn">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33333 8.49999C1.33333 4.81999 4.29333 1.83333 8 1.83333C12.4467 1.83333 14.6667 5.53999 14.6667 5.53999M14.6667 5.53999V2.20666M14.6667 5.53999H11.7067"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M14.5933 8.5C14.5933 12.18 11.6067 15.1667 7.92667 15.1667C4.24667 15.1667 2 11.46 2 11.46M2 11.46H5.01333M2 11.46V14.7933"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    Refresh
                  </button>
                  <button className="foreground">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33333 8.49999C1.33333 4.81999 4.29333 1.83333 8 1.83333C12.4467 1.83333 14.6667 5.53999 14.6667 5.53999M14.6667 5.53999V2.20666M14.6667 5.53999H11.7067"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M14.5933 8.5C14.5933 12.18 11.6067 15.1667 7.92667 15.1667C4.24667 15.1667 2 11.46 2 11.46M2 11.46H5.01333M2 11.46V14.7933"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    Refresh
                  </button>
                </Col>
                <Col md={1} lg={1} xl={1} xxl={1}>
                  <button className="print-btn">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M4.83334 5.16666H11.1667V3.83333C11.1667 2.49999 10.6667 1.83333 9.16668 1.83333H6.83334C5.33334 1.83333 4.83334 2.49999 4.83334 3.83333V5.16666Z"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.6667 10.5V13.1667C10.6667 14.5 10 15.1667 8.66668 15.1667H7.33334C6.00001 15.1667 5.33334 14.5 5.33334 13.1667V10.5H10.6667Z"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 7.16667V10.5C14 11.8333 13.3333 12.5 12 12.5H10.6667V10.5H5.33333V12.5H4C2.66667 12.5 2 11.8333 2 10.5V7.16667C2 5.83334 2.66667 5.16667 4 5.16667H12C13.3333 5.16667 14 5.83334 14 7.16667Z"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3333 10.5H10.5267H4.66666"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M4.66666 7.83333H6.66666"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="foreground">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M4.83334 5.16666H11.1667V3.83333C11.1667 2.49999 10.6667 1.83333 9.16668 1.83333H6.83334C5.33334 1.83333 4.83334 2.49999 4.83334 3.83333V5.16666Z"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.6667 10.5V13.1667C10.6667 14.5 10 15.1667 8.66668 15.1667H7.33334C6.00001 15.1667 5.33334 14.5 5.33334 13.1667V10.5H10.6667Z"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 7.16667V10.5C14 11.8333 13.3333 12.5 12 12.5H10.6667V10.5H5.33333V12.5H4C2.66667 12.5 2 11.8333 2 10.5V7.16667C2 5.83334 2.66667 5.16667 4 5.16667H12C13.3333 5.16667 14 5.83334 14 7.16667Z"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3333 10.5H10.5267H4.66666"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M4.66666 7.83333H6.66666"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </Col>
              </Row>
            </Container>
          </Row>
          <Row className="table">
            <div id="example_wrapper" className="dataTables_wrapper">
              <div className="table-wrapper" style={{overflowX: "auto"}}>
                <table
                  id="example"
                  className="display dataTable"
                  style={{ width: "100%" }}
                  aria-describedby="example_info"
                >
                  <thead>
                    <tr>
                      <th
                        className="sorting sorting_asc"
                        tabIndex="0"
                        aria-controls="example"
                        rowSpan="1"
                        colSpan="1"
                        aria-sort="ascending"
                        aria-label="Name: activate to sort column descending"
                        style={{ width: "20%" }}
                      >
                        Customer Name
                      </th>
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="example"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Position: activate to sort column ascending"
                        style={{ width: "10%" }}
                      >
                        Level
                      </th>
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="example"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Office: activate to sort column ascending"
                        style={{ width: "20%" }}
                      >
                        Favorite Menu
                      </th>
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="example"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Age: activate to sort column ascending"
                        style={{ width: "20%" }}
                      >
                        Total Transaction
                      </th>
                      <th
                        className="sorting"
                        tabIndex="0"
                        aria-controls="example"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Start date: activate to sort column ascending"
                        style={{ width: "20%" }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className={(index + 1) % 2 == 0 ? "even" : "odd"}
                        >
                          <td>{item.name}</td>
                          <td>{item.level}</td>
                          <td>{item.fav}</td>
                          <td>{item.total}</td>
                          <td
                            style={{
                              display: "flex",
                              padding: "auto",
                              margin: "0px 10px",
                              justifyContent: "space-between",
                            }}
                          >
                            <button className="detail-btn">
                              <svg
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.895 5.775V4.06C10.895 3.445 10.425 2.765 9.85001 2.55L7.35501 1.615C6.94001 1.46 6.26001 1.46 5.84501 1.615L3.35001 2.555C2.77501 2.77 2.30501 3.45 2.30501 4.06V7.775C2.30501 8.365 2.69501 9.14 3.17001 9.495L5.32001 11.1C5.67001 11.37 6.13501 11.5 6.60001 11.5"
                                  stroke="#292D32"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  opacity="0.4"
                                  d="M8.60001 10.5C9.70458 10.5 10.6 9.60457 10.6 8.5C10.6 7.39543 9.70458 6.5 8.60001 6.5C7.49544 6.5 6.60001 7.39543 6.60001 8.5C6.60001 9.60457 7.49544 10.5 8.60001 10.5Z"
                                  stroke="#292D32"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  opacity="0.4"
                                  d="M11.0978 11H11.1023"
                                  stroke="#292D32"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              Detail
                            </button>
                            <button className="edit-btn">
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.62999 2.3L2.52499 6.645C2.36999 6.81 2.21999 7.135 2.18999 7.36L2.00499 8.98C1.93999 9.565 2.35999 9.965 2.93999 9.865L4.54999 9.59C4.77499 9.55 5.08999 9.385 5.24499 9.215L9.34999 4.87C10.06 4.12 10.38 3.265 9.27499 2.22C8.17499 1.185 7.33999 1.55 6.62999 2.3Z"
                                  stroke="#110D17"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  opacity="0.4"
                                  d="M5.94501 3.025C6.16001 4.405 7.28001 5.46 8.67001 5.6"
                                  stroke="#110D17"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  opacity="0.4"
                                  d="M1.5 11.5H10.5"
                                  stroke="#110D17"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                            <button className="delete-btn">
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.5 3.49C8.835 3.325 7.16 3.24 5.49 3.24C4.5 3.24 3.51 3.29 2.52 3.39L1.5 3.49"
                                  stroke="#F02D3A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  opacity="0.34"
                                  d="M4.25 2.985L4.36 2.33C4.44 1.855 4.5 1.5 5.345 1.5H6.655C7.5 1.5 7.565 1.875 7.64 2.335L7.75 2.985"
                                  stroke="#F02D3A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9.42501 5.07L9.10001 10.105C9.04501 10.89 9.00001 11.5 7.60501 11.5H4.39501C3.00001 11.5 2.95501 10.89 2.90001 10.105L2.57501 5.07"
                                  stroke="#F02D3A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  opacity="0.34"
                                  d="M5.16501 8.75H6.83001"
                                  stroke="#F02D3A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  opacity="0.34"
                                  d="M4.75 6.75H7.25"
                                  stroke="#F02D3A"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="example-bottom-wrapper">
                <div
                  className="dataTables_info"
                  id="example_info"
                  role="status"
                  aria-live="polite"
                >
                  Showing 1 to 10 of 57 entries
                </div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="example_paginate"
                >
                  <a
                    className="paginate_button previous disabled"
                    aria-controls="example"
                    aria-disabled="true"
                    // aria-role="link"
                    data-dt-idx="previous"
                    tabIndex="-1"
                    id="example_previous"
                  >
                    Previous
                  </a>
                  <span>
                    <a
                      className="paginate_button"
                      aria-controls="example"
                      // aria-role="link"
                      aria-current="page"
                      data-dt-idx="0"
                      tabIndex="0"
                    >
                      1
                    </a>
                    <a
                      className="paginate_button "
                      aria-controls="example"
                      // aria-role="link"
                      data-dt-idx="1"
                      tabIndex="0"
                    >
                      2
                    </a>
                    <a
                      className="paginate_button "
                      aria-controls="example"
                      // aria-role="link"
                      data-dt-idx="2"
                      tabIndex="0"
                    >
                      3
                    </a>
                    <a
                      className="paginate_button "
                      aria-controls="example"
                      // aria-role="link"
                      data-dt-idx="3"
                      tabIndex="0"
                    >
                      4
                    </a>
                    <a
                      className="paginate_button "
                      aria-controls="example"
                      // aria-role="link"
                      data-dt-idx="4"
                      tabIndex="0"
                    >
                      5
                    </a>
                    <a
                      className="paginate_button "
                      aria-controls="example"
                      // aria-role="link"
                      data-dt-idx="5"
                      tabIndex="0"
                    >
                      6
                    </a>
                  </span>
                  <a
                    className="paginate_button next"
                    aria-controls="example"
                    // aria-role="link"
                    data-dt-idx="next"
                    tabIndex="0"
                    id="example_next"
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </Col>
      <Col xl={3} className="cards-container">
        <div className="top-card">
          <div className="text">See analytics of the Customer Clearly</div>
          <div className="btn-wrapper">
            <Button>See Analytics</Button>
          </div>
        </div>
        <div className="bottom-card">
          <div className="title">
            <span style={{ color: "#110D17", fontWeight: "600" }}>
              Top Menu
            </span>
            <span style={{ color: "#F17300", fontWeight: "700" }}>
              This Week
            </span>
          </div>
          <div className="date">10 - 12 Agustus 2023</div>
          <div className="items">
            <div className="top-item">
              Nasi Goreng Jamur Special Resto Pak Min
            </div>
            <div className="item">2. Tongseng Sapi Gurih</div>
            <div className="item">3. Nasi Gudeg Telur Ceker</div>
            <div className="item">4. Nasi Ayam serundeng</div>
            <div className="item">5. Nasi Goreng Seafood</div>
          </div>
        </div>
      </Col>
    </>
  );
};
