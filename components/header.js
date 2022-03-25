
import { Link } from "./Link";
const Header = (props) => {
    return (
        <div className="container site-header-container reset-padding">
            <nav className="site-navigation navbar navbar-expand-lg navbar-light">
                <Link href="/" className="navbar-brand" ><img src="/assets/images/site-logo-white.png" className="site-logo"/></Link>
                <div className="searchBar-mb d-block d-lg-none">  
                    <a href="#" className="search-form-trigger" data-toggle="search-form">
                        <i className="fa fa-search" aria-hidden="true" data-toggle="search-form"></i>
                    </a>
                    <div className="togglesearch">
                        <div className="togglesearch-wrapper mx-auto">
                            <input type="text" placeholder="What do you want" />
                            <button type="button" className="btn btn-search-gsm gsm-bg-individual border-0 rounded-1">
                                <img src="/assets/images/icon-feather-search.png" style={{width: '16px',height:'16px'}} />
                            </button>
                            <span className="input-group-addon search-close gsm-bg-white" id="basic-addon2"><i className="fa fa-window-close" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="main-nav collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <Link href="/individual" className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Individual
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a href="#" className="drop-link">Recruter des talents</a>
                                    <p className="drop-desc">Recruter des réparateurs/trices de produits nomades</p>
                                    <hr className="drop-option-seperator" />
                                </li>
                                <li>
                                    <a href="#" className="drop-link">Formez vos équipes</a>
                                    <p className="drop-desc">Réparation et micro soudure Compétences transverses du secteur</p>
                                    <hr className="drop-option-seperator" />
                                </li>
                                <li>
                                    <a href="#" className="drop-link">Certification niveau 4 (niveau bac)</a>
                                    <ul className="drop-desc-list">
                                        <li>VAE</li>
                                        <li>Parcours de formation</li>
                                    </ul>
                                    <hr className="drop-option-seperator" />
                                </li>
                                <li>
                                    <a href="#" className="drop-link">Certification niveau 3 (bac + 2)</a>
                                    <p className="drop-desc">VAE Parcours de formation</p>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link href="/company" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Company
                            
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a href="#" className="drop-link">Recruter des talents</a>
                                    <p className="drop-desc">Recruter des réparateurs/trices de produits nomades</p>
                                    <hr className="drop-option-seperator" />
                                </li>
                                <li>
                                    <a href="#" className="drop-link">Formez vos équipes</a>
                                    <p className="drop-desc">Réparation et micro soudure Compétences transverses du secteur</p>
                                    <hr className="drop-option-seperator" />
                                </li>
                                <li>
                                    <a href="#" className="drop-link">Certification niveau 4 (niveau bac)</a>
                                    <p className="drop-desc">VAE Parcours de formation</p>
                                    <hr className="drop-option-seperator" />
                                </li>
                                <li>
                                    <a href="#" className="drop-link">Certification niveau 3 (bac + 2)</a>
                                    <p className="drop-desc">VAE Parcours de formation</p>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link href="/organization" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Organization
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a href="#" className="drop-link">Collaborez avec GSM Master</a>
                                    <hr className="drop-option-seperator" />
                                </li>
                                <li>
                                    <a href="#" className="drop-link">Nos certifications</a>
                                    <ul className="drop-desc-list">
                                        <li>Certification niveau 4</li>
                                        <li>Certification niveau 3</li>
                                    </ul>
                                </li>
                                <img src="/assets/images/careers-circle-pic-2.png" className="drop-desc-img" />
                            </ul>
                        </li>
                    </ul>
                    <form name="searchForm" className="search-form form-inline my-2 my-lg-0">
                        <input name="search-for" className="search-for form-control mr-sm-0 rounded-0 border-right-0 gsm-border-individual" type="search" placeholder="What do you want to learn" aria-label="Search" />
                        <button className="btn btn-search-gsm gsm-bg-individual border-0 rounded-0 my-sm-0" type="subuttonbmit"><img src="/assets/images/icon-feather-search.png" style={{width: '16px',height:'16px'}} /></button>
                    </form>
                </div>
            </nav>
        </div>
    );
}
export default Header;