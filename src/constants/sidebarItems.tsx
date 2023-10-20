import {
    AntDesignOutlined,
    BookOutlined,
    ClearOutlined,
    LogoutOutlined,
    ProfileOutlined,
    RedoOutlined,
    UserOutlined,
    UsergroupAddOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Link from 'next/link';
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
    const defaultSidebarItems: MenuProps["items"] = [{
        label: "Profile",
        key: "profile",
        icon: <UserOutlined />,
        children: [
            {
                label: <Link href={`/${role}`}>Account Profile</Link>,
                key: `${role}/profile`,
                icon: <AntDesignOutlined />
            },
            {
                label: <Link href={`/${role}/change-password`}>Change Password</Link>,
                key: `${role}/change-password`,
                icon: <RedoOutlined />
            },
        ]
    }]

    //  For admin Items

    const adminSidebarItems: MenuProps["items"] = [

        {
            label: <Link href={`/admin/manage-customer`}>Manage Customer</Link>,
            key: `${role}/manage-customer`,
            icon: <UsergroupAddOutlined />
        },
        {
            label: <Link href={`/${role}/bookings`}>All Bookings</Link>,
            key: `${role}/bookings`,
            icon: <BookOutlined />
        },
        {
            label: <Link href={`/${role}/bookings`}>All Service</Link>,
            key: `${role}/bookings`,
            icon: <ClearOutlined />
        },
        {
            label: <Link href={`/${role}/change-password`}>LogOut</Link>,
            key: `${role}/change-password`,
            icon: <LogoutOutlined />
        },

    ]

    //  For super admin Items
    const superAdminSidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,

        {
            label: <Link href={`/${role}/manage-admin`}>Manage Admin</Link>,
            key: `${role}/manage-admin`,
            icon: <ProfileOutlined />
        },

        ...adminSidebarItems,

    ]

    //  For Customer Items

    const customerItems: MenuProps["items"] = [
        ...defaultSidebarItems,

        {
            label: <Link href={`/admin/manage-customer`}>Manage Booking</Link>,
            key: `${role}/manage-customer`,
            icon: <UsergroupAddOutlined />
        },

        {
            label: <Link href={`/${role}/bookings`}>Past Service</Link>,
            key: `${role}/bookings`,
            icon: <ClearOutlined />
        },
        {
            label: <Link href={`/${role}/change-password`}>LogOut</Link>,
            key: `${role}/change-password`,
            icon: <LogoutOutlined />
        },

    ]


    if (role === "super_admin") return superAdminSidebarItems;


    if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
    else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
    else if (role === USER_ROLE.CUSTOMER) return customerItems;

};

