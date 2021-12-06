import './App.css'
import React from 'react'
import {Layout} from 'antd'
import 'antd/dist/antd.css';
import Sidebar from './component/dashboard/Sidebar'
import Navbar from './component/dashboard/Navbar'
import Content from './component/dashboard/Content'
import Footer from './component/dashboard/Footer'

function App() {
  return (
    <div className="App">
        <React.Fragment>
          <Layout >
              <Navbar />
                <Layout>
                  <Sidebar />
                  <Content />
                  
                </Layout>
                <Layout>
                  <Footer />
                </Layout>  
          </Layout>
        </React.Fragment>

      
    </div>
  );
}

export default App;
