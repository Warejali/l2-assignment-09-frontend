"use client"
import { Table } from "antd";

type TableProps = {
    loading?: boolean,
    columns: any,
    dataSource: any,
    pageSize?: number,
    total?: number,
    pageSizeOptions?: number[],
    showSizeChanger?: boolean,
    onPaginationChange?: (page: number, pageSize: number,) => void
    onTableChange?: (pagination: any, filter: any, sorter: any) => void
    showPagination?: boolean
}

const TableReuse = ({
    loading = false,
    columns,
    dataSource,
    pageSize,
    total,
    pageSizeOptions,
    showSizeChanger,
    onPaginationChange,
    onTableChange,
    showPagination = true,
}: TableProps) => {



    const paginationOptionsConfig = showPagination ? {
        pageSize: pageSize,
        total: total,
        pageSizeOptions: pageSizeOptions,
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange
    } : false

    return (
        <Table
            loading={loading}
            columns={columns}
            dataSource={dataSource}
            pagination={paginationOptionsConfig}
            onChange={onTableChange}

        />

    );
};

export default TableReuse;