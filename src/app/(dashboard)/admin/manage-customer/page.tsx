"use client"
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import TableReuse from "@/components/ui/TableReuse";
import { useCustomersQuery, useDeleteCustomerMutation } from "@/redux/api/customerApi";
import { useDebounced } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import { DeleteOutlined, EditOutlined, EyeOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

const ManageCustomer = () => {
    const { role } = getUserInfo() as any

    const query: Record<string, any> = {}

    const [size, setSize] = useState<number>(10)
    const [page, setPage] = useState<number>(1)
    const [sortBy, setSortBy] = useState<string>("")
    const [sortOrder, setSortOrder] = useState<string>("")
    const [searchTerm, setSearchTerm] = useState<string>("")

    const [deleteCustomer] = useDeleteCustomerMutation()

    query["limit"] = size
    query["page"] = page
    query["sortBy"] = sortBy
    query["sortOrder"] = sortOrder
    // query["searchTerm"] = searchTerm

    const debouncedTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600,
    })

    if (!!debouncedTerm) {
        query["searchTerm"] = searchTerm
    }

    const { data, isLoading } = useCustomersQuery({ ...query })
    const customers = data?.customers
    const meta = data?.meta

    const deleteHandler = async (id: string) => {
        message.loading("Deleting....")
        try {
            await deleteCustomer(id)
            message.success("Successfully deleted")
        } catch (error: any) {
            message.error(error.message)
        }
    }

    const columns = [
        {
            title: 'FullName',
            dataIndex: 'fullName',
            sorter: true
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
        },
        {
            title: 'Contact No',
            dataIndex: 'contactNo',
        },
        {
            title: 'CreatedAt',
            dataIndex: 'createdAt',
            render: function (data: any) {
                return data && dayjs(data).format("mm D, YYYY hh:mm A")
            },
            sorter: true

        },

        {
            title: 'Action',
            render: function (data: any) {
                return <>
                    <div className="flex gap-3">
                        <Button onClick={() => console.log(data)} >
                            <EyeOutlined />
                        </Button>

                        <Link href={`/admin/manage-customer/edit/${data?._id}`}>
                            <Button onClick={() => console.log(data)} >
                                <EditOutlined />
                            </Button>
                        </Link>
                        <Button onClick={() => deleteHandler(data?.id)} className=" text-red-500">
                            <DeleteOutlined />
                        </Button>
                    </div>
                </>
            }

        },
    ]

    const onPaginationChange = (page: number, pageSize: number) => {
        console.log(page, pageSize);
        setPage(page)
        setSize(pageSize)

    }

    const onTableChange = (pagination: any, filter: any, sorter: any) => {
        const { order, field } = sorter
        setSortBy(field as string)
        setSortOrder(order === "ascwnd" ? "asc" : "desc")
    }

    const resetFilters = () => {
        setSortOrder('')
        setSortBy('')
        setSearchTerm('')
    }

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
                            label: "Customer",
                            link: `/${role}/customer`,
                        }
                    ]
                }
            />

            <ActionBar title="Manage Customer">
                <Input
                    className=" w-1/6"
                    type="text"
                    size="large"
                    placeholder="...Search"
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <div>
                    <Link href="/admin/manage-customer/create-customer">
                        <Button>Create New Customer</Button>
                    </Link>
                    {
                        (!!sortBy || !!sortOrder || !!searchTerm) && <Button onClick={resetFilters} className="mx-2" type="primary"><ReloadOutlined /></Button>
                    }
                </div>
            </ActionBar>
            <TableReuse
                columns={columns}
                loading={isLoading}
                dataSource={customers}
                pageSize={size}
                total={meta?.total}
                pageSizeOptions={[1, 5, 10, 20, 30, 40, 50]}
                showSizeChanger={true}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}
            />
        </div>
    );
};

export default ManageCustomer;