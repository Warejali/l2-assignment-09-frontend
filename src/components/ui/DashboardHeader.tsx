import { authKey } from '@/constants/storageKey';
import { removeUserInfo } from '@/services/auth.service';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Button, Dropdown, Layout, Row, Space } from 'antd';
import { useRouter } from 'next/navigation';

const { Header } = Layout;


const DashboardHeader = () => {

    const router = useRouter()

    const logOut = () => {
        removeUserInfo(authKey)
        router.push("/login")
    }

    const items: MenuProps['items'] = [

        {
            key: 0,
            label: (
                <Button onClick={logOut} type='text'>
                    LogOut
                </Button>
            )
        },
        {
            key: 0,
            label: "Dashboard"
        },
    ]
    return (
        <Header className=' bg-slate-300'>
            <Row justify="end" align="middle" className=' h-full'>
                <Dropdown menu={{ items }}>
                    <Space wrap size={16}>
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Space>
                </Dropdown>
            </Row>
        </Header>
    );
};

export default DashboardHeader;