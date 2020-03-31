import Head from 'next/head';
import Link from 'next/link';
import Sidebar from './Sidebar';

const Layout = (props) => (
  <div>
    <Head>
      <title>POLISHOP News</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.0.2/css/adminlte.min.css" />
    </Head>
    <div className="hold-transition sidebar-mini layout-fixed">
      <Sidebar />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <span>
                        Home
                      </span>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    Dashboard v1
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
    </div>
    <footer className="main-footer">
      <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
      All rights reserved.
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.0.3-pre
      </div>
    </footer>
  </div>
)

export default Layout;