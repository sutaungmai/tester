import { Layout, Menu} from 'antd'
import React from 'react'

function Sidebar() {
    return (
        <div >
            
                <Layout.Sider 
                    theme="light"
                    style={{
                        height: '100vh',
                    }}
                >
                    <div className="logo main-theme" ></div>
                    <Menu  className="sider">
                        <Menu.Item className="sidebar">
                            OverView
                        </Menu.Item>

                        <Menu.Item className="sidebar">
                            Open Issues
                        </Menu.Item>

                        <Menu.Item className="sidebar">
                            Closed Issues
                        </Menu.Item>

                        <Menu.Item className="sidebar">
                            IT Team Tasks
                        </Menu.Item>
                    </Menu>
                </Layout.Sider>
              
        </div>
    )
}

export default Sidebar
