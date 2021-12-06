import { Layout, Menu} from 'antd'
import React from 'react'

function Sidebar() {
    return (
        <div>
            <React.Fragment>
                <Layout.Sider
                style={{
                    overflow:'auto',
                    height: '100vh',
                }}
                >
                    <Menu >
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
            </React.Fragment>    
        </div>
    )
}

export default Sidebar
