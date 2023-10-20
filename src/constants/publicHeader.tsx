"use client"
import { isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Button, Dropdown, Layout, Row, Space } from 'antd';
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../asets/logo.png";
import { authKey } from "./storageKey";

const { Header } = Layout;


const PublicHeader = () => {

    const router = useRouter()

    const logOut = () => {
        removeUserInfo(authKey)
        router.push("/login")
    }
    const userLoggedIn = isLoggedIn()

    const login = () => {
        router.push("/login")
    }
    const register = () => {
        router.push("/register")
    }
    const items: MenuProps['items'] = [

        {
            key: 0,
            label: (
                userLoggedIn ? <Button onClick={logOut} type='text'>
                    LogOut
                </Button> : <Button onClick={login} type='text'>
                    Login
                </Button>
            )
        },
        {
            key: 0,
            label: (
                <Button onClick={register} type='text'>
                    Register
                </Button>
            )
        },
        {
            key: 0,
            label: "Dashboard"
        },
    ]
    return (
        <div>
            <Header className="flex justify-between items-center" >
                <div className="demo-logo  flex justify-between items-center h-full">
                    <Image src={logo} width={150} alt="" />
                </div>
                <Row justify="end" align="middle" className=' h-full'>
                    {/* <Menu>
                        <Link href={"/login"} >
                            <p>Login</p>
                        </Link>
                    </Menu> */}
                    <Dropdown menu={{ items }}>
                        <Space wrap size={16}>
                            <Avatar size="large" icon={<UserOutlined />} />
                        </Space>
                    </Dropdown>
                </Row>
            </Header>
        </div>
    );
};

export default PublicHeader;