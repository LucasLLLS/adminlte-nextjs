import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        <span className="brand-text font-weight-light">POLIBLOG</span>
      </a>

    <div className="sidebar">
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

          <li className="nav-item">
            <Link href="/novo-post">
              <div className="nav-link">
                <i className="nav-icon fas fa-plus" aria-hidden="true"></i>
                <p>
                  Novo post
                </p>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="pages/widgets.html">
              <div className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>
                  Ver posts
                </p>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-circle text-info"></i>
              <p>Sair</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
  );
}

export default Sidebar;
