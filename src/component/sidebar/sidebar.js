
import { Outlet, Link } from "react-router-dom";
import './style.css';
import './sidebar.css';
import { useEffect } from "react";
 
const Sidebar = () => {
    useEffect(() => {
        const sidebarToggle = document.querySelector('#sidebarToggle');
        if (sidebarToggle) {
            const handleClick = (event) => {
                event.preventDefault();
                document.body.classList.toggle('sb-sidenav-toggled');
                localStorage.setItem(
                    'sb|sidebar-toggle',
                    document.body.classList.contains('sb-sidenav-toggled')
                );
            };
            sidebarToggle.addEventListener('click', handleClick);
            return () => {
                sidebarToggle.removeEventListener('click', handleClick);
            };
        }
    }, []);
    return (
        <div>
            <nav className="sb-topnav navbar navbar-expand text-white " style={{ background: '#1e3f3a' }}>
                <Link className="navbar-brand ps-3 text-white p-2" to="index.html">
                </Link>
                <button className="btn btn  btn-sm order-1 order-lg-0 me-4 me-lg-0 text-white" id="sidebarToggle">
                    <i className="fas fa-bars"></i></button>
                <Link className="navbar-brand ps-3 text-white">Finance Tracker Website</Link>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav" >
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="text-center">
                                <img src="./logo192.png"
                                    alt="logo" style={{ width: '130px' }} />
                            </div>
                            <div className="nav">
                                <Link className="nav-link " to="dashboard">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Dashboard
                                </Link>
                                <Link to="budget" className="nav-link" >
                                    <div className="sb-nav-link-icon"><i className="fas fa-wallet"></i></div>
                                    Budget Management
                                </Link>
                                <Link className="nav-link" to="income">
                                    <div className="sb-nav-link-icon"><i className="fas fa-money-check-alt"></i></div>
                                    Income Management
                                </Link>
                                <Link className="nav-link" to="expense">
                                    <div className="sb-nav-link-icon"><i className="fas fa-money-bill"></i></div>
                                    Expense Management
                                </Link>

                                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                    Transaction
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </Link>
                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className="nav-link" to="transaction">Transactions</Link>
                                        <Link className="nav-link" to="scheduletransaction">Scheduled Transaction</Link>

                                    </nav>
                                </div>

                                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                    Setting
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </Link>
                                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className="nav-link" to="profile">Profile</Link>

                                    </nav>
                                </div>
                                <Link className="nav-link" to="/login">
                                    <div className="sb-nav-link-icon"><i className="fas fa-sign-out-alt" aria-hidden="true"></i></div>
                                    Log Out
                                </Link>


                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            Admin
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <main className="sectionpage">
                        <Outlet />
                    </main>

                </div>
            </div>
        </div>
    )

}

export default Sidebar
