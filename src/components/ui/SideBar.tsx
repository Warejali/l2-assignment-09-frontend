"use client"
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];


import { sidebarItems } from '@/constants/sidebarItems';
import { getUserInfo } from '@/services/auth.service';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
const { Header, Content, Footer, Sider } = Layout;


function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];


const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { role } = getUserInfo() as any
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className=' sticky overflow-auto min-h-screen'>
            <div className="demo-logo-vertical" >
                <Link href="/">
                    <h3 className='text-white uppercase flex justify-center'>Platinum Cleaning</h3>
                </Link>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(role)} />
        </Sider>
    );
};

export default SideBar;