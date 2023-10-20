"use client"
import Contents from '@/components/ui/Contents';
import SideBar from '@/components/ui/SideBar';
import { isLoggedIn } from '@/services/auth.service';
import { Layout } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const userLoggedIn = isLoggedIn()
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (!userLoggedIn) {
            router.push("/login")
            setIsLoading(true)
        }
    }, [router, isLoading])

    if (!isLoading) {
        <p>Loading....</p>
    }

    return (
        <Layout hasSider>
            <SideBar />
            <Contents>
                {children}
            </Contents>
        </Layout>
    );
};

export default DashboardLayout;



