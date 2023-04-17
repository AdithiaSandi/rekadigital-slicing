import React from "react";
import "./styles/SideMenu.css";
import logo from "../assets/daya-logo.svg";
import { useSelector } from "react-redux";
import { selectMobile } from "../state/reducer/isMobile";

export const SideMenu = () => {
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").className = "sidenav close";
    document.body.style.backgroundColor = "#fff";
  }

  // const [mobile, setMobile] = useState(window.innerWidth >= 768 ? false : true);

  const mobile = useSelector(selectMobile);

  const resizeResponse = () => {
    if (window.innerWidth >= 900) {
      document.body.style.backgroundColor = "white";
    }
  };

  window.onresize = resizeResponse;

  return (
    <div id="mySidenav" className={mobile ? "sidenav close" : "sidenav"}>
      <a href="." className="logo">
        <img src={logo}></img>
      </a>
      {mobile ? (
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => closeNav()}
        >
          &times;
        </a>
      ) : // <div className="btn-collapse">
      //   <button onClick={() => openNav()}>
      //     <img src={collapse} />
      //   </button>
      // </div>
      null}
      <ul>
        <li className="menu-header">Menu</li>
        <li style={{ listStyleImage: "url(/src/assets/dashboard-icon.svg)" }}>
          <a>Dashboard</a>
        </li>
        <li style={{ listStyleImage: "url(/src/assets/stock-icon.svg)" }}>
          <a>Stock</a>
        </li>
        <li style={{ listStyleImage: "url(/src/assets/customer-icon.svg)" }}>
          <a style={{ color: "#5D5FEF", fontWeight: "600" }}>Customer</a>
        </li>
        <li style={{ listStyleImage: "url(/src/assets/restaurant-icon.svg)" }}>
          <a>Restaurant</a>
        </li>
        <li style={{ listStyleImage: "url(/src/assets/design-icon.svg)" }}>
          <a>Design</a>
        </li>
        <li style={{ listStyleImage: "url(/src/assets/report-icon.svg)" }}>
          <a>Report</a>
        </li>
        <li style={{ listStyleImage: "url(/src/assets/role-icon.svg)" }}>
          <a>Role & Admin</a>
        </li>
        <li style={{ listStyleImage: "url(/src/assets/settings-icon.svg)" }}>
          <a>Settings</a>
        </li>
        <li className="menu-header">Integration</li>
        <li
          style={{
            listStyleImage: "url(/src/assets/integration-stock-icon.svg)",
          }}
        >
          <a>Stock</a>
        </li>
        <li style={{ listStyleImage: "url(/src/assets/supply-icon.svg)" }}>
          <a>Supply</a>
        </li>
      </ul>

      <div id="profile" className="profile-container">
        <div className="profile-content">
          <div className="profile-wrapper">
            <img
              src="/src/assets/profile-icon.png"
              alt="profile-icon"
              className="profile-picture"
            />
            <div className="profile-detail">
              <div className="profile-name">Savannah N</div>
              <div className="profile-position">Food Quality Manager</div>
            </div>
          </div>
          <button className="logout-btn">
            <img src="/src/assets/logout-icon.svg" alt="" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};
