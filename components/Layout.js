import Head from 'next/head';
import Link from 'next/link';
import Sidebar from './Sidebar';

const Layout = ({
  children,
  title
}) => (
  <div>
    <Head>
      <title>CMS POLISHOP - {title}</title>
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
                <h1 className="m-0 text-dark">{title}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            {children}
          </div>
        </div>
      </div>
    </div>
    <footer className="main-footer">
      {/* <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
      All rights reserved.
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.0.3-pre
      </div> */}
    </footer>
  </div>
)

export default Layout;