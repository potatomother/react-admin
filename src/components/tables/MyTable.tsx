/**
 * Created by hao.cheng on 2017/4/15.
 */
import React from 'react';
import { Table, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 150,
        render: (text: any) => <span>{text}</span>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: 250,
    },
    {
        title: 'Address1',
        dataIndex: 'address1',
        key: 'address',
        width: 250,
    },
    {
        title: 'Address2',
        dataIndex: 'address2',
        key: 'address',
        width: 250,
    },
    {
        title: 'Address3',
        dataIndex: 'address3',
        key: 'address',
        width: 250,
    },
    {
        title: 'Action',
        key: 'action',
        fixed: 'right',
        width: 250,
        render: (text: any, record: any) => (
            <span>
                <Button>Action 一 {record.name}</Button>
                <span className="ant-divider" />
                <Button>Delete</Button>
                <span className="ant-divider" />
                <Button className="ant-dropdown-link">
                    More actions <DownOutlined />
                </Button>
            </span>
        ),
    },
];
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    address1: string;
    address2: string;
    address3: string;
}
const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        address1: 'New York No. 1 Lake Park',
        address2: 'New York No. 1 Lake Park',
        address3: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        address1: 'New York No. 1 Lake Park',
        address2: 'New York No. 1 Lake Park',
        address3: 'New York No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        address1: 'New York No. 1 Lake Park',
        address2: 'New York No. 1 Lake Park',
        address3: 'New York No. 1 Lake Park',
    },
];

const MyTable = () => <Table scroll={{ x: 1500 }} columns={columns} dataSource={data} />;

export default MyTable;
