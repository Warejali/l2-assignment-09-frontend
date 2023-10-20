"use client"
import { Layout } from 'antd';


const { Header, Content, Footer, Sider } = Layout;
const PublicContents = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    {children}
                </div>
            </Content>
        </div>
    );
};

export default PublicContents;