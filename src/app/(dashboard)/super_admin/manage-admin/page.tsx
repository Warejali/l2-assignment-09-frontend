"use client"
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageAdmin = () => {
    const { role } = getUserInfo() as any

    return (
        <div>
            <BreadCrumb
                items={
                    [
                        {
                            label: `${role}`,
                            link: `/${role}`,
                        },
                        {
                            label: "manage-admin",
                            link: `/${role}/manage-admin`,
                        },

                    ]
                }
            />
            <ActionBar title="Admin Table">
                <Link href="/super_admin/manage-admin/create-admin">
                    <Button>Create New Admin</Button>
                </Link>
            </ActionBar>

        </div>
    );
};

export default ManageAdmin;