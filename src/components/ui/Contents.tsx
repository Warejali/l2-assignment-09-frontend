"use client"
import { Layout } from 'antd';
import DashboardHeader from './DashboardHeader';

const { Header, Content, Footer, Sider } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
    return (
        <Content className=' min-h-screen mx-2'>
            <DashboardHeader />
            <div className=' min-h-screen m-4 '>

                {children}
            </div>
        </Content>
    );
};

export default Contents;