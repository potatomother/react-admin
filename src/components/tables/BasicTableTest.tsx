/**
 * Created by hao.cheng on 2017/4/15.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import MyTable from './MyTable';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';

const BasicTables = () => (
    <div className="gutter-example">
        <BreadcrumbCustom breads={['表格', '基础表格test']} />
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
                <div className="gutter-box">
                    <Card title="基础表格test1" bordered={false}>
                        <MyTable />
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
);

export default BasicTables;
