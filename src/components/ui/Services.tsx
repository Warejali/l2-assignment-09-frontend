import { AccountBookOutlined, EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import Image from 'next/image';
import bathroom from "../../asets/Bathroom.jpg";
import furniture from "../../asets/Furniture .jpg";
import kitchen from "../../asets/Kitchen.jpg";
import house from "../../asets/house.jpg";
import rooms from "../../asets/rooms.jpg";
import wall from "../../asets/wall.jpg";

const Services = () => {
    return (
        <div className=' box-border max-w-7xl mx-auto my-10'>
            <Row gutter={16}>
                <Col span={8}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <Image
                                alt="example"
                                src={kitchen}
                                width={280}
                            />
                        }
                        actions={[
                            <ShoppingCartOutlined key="Add to cart" />,
                            <AccountBookOutlined key="book" />,
                            <EyeOutlined key="view" />
                        ]}
                    >
                        <Meta

                            title="Kitchen"
                            description="And cause the exterior to corrode. So make sure you're using the right products"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <Image
                                alt="example"
                                src={wall}
                                width={280}
                            />
                        }
                        actions={[
                            <ShoppingCartOutlined key="Add to cart" />,
                            <AccountBookOutlined key="book" />,
                            <EyeOutlined key="view" />
                        ]}
                    >
                        <Meta

                            title="Clean Painted Walls"
                            description="Regular cleaning can help prevent these harmful growths from taking hold."
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <Image
                                alt="example"
                                src={furniture}
                                width={280}
                            />
                        }
                        actions={[
                            <ShoppingCartOutlined key="Add to cart" />,
                            <AccountBookOutlined key="book" />,
                            <EyeOutlined key="view" />
                        ]}
                    >
                        <Meta

                            title="Furniture cleaning"
                            description="water only in the machine. And then I thoroughly flush working in sections the entire."
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <Image
                                alt="example"
                                src={bathroom}
                                width={280}
                            />
                        }
                        actions={[
                            <ShoppingCartOutlined key="Add to cart" />,
                            <AccountBookOutlined key="book" />,
                            <EyeOutlined key="view" />
                        ]}
                    >
                        <Meta

                            title="Bathroom"
                            description="Forte says to prevent mildew and other buildup, it's best to deep clean your space."
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <Image
                                alt="example"
                                src={rooms}
                                width={280}
                            />
                        }
                        actions={[
                            <ShoppingCartOutlined key="Add to cart" />,
                            <AccountBookOutlined key="book" />,
                            <EyeOutlined key="view" />
                        ]}
                    >
                        <Meta

                            title="Rooms"
                            description="This type of surface cleaning is performed on a weekly basis to maintain a level of cleanliness."
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <Image
                                alt="example"
                                src={house}
                                width={280}
                            />
                        }
                        actions={[
                            <ShoppingCartOutlined key="Add to cart" />,
                            <AccountBookOutlined key="book" />,
                            <EyeOutlined key="view" />
                        ]}
                    >
                        <Meta

                            title="Full House"
                            description="Determining how often to clean a house depends on size, how often rooms are used, "
                        />
                    </Card>
                </Col>

            </Row>

        </div>
    );
};

export default Services;