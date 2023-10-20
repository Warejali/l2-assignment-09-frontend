import { Space, Spin } from "antd";

const LoadingPage = () => {
    return (
        <div className=" flex max-h-screen justify-center items-center ">
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </div>
    );
};

export default LoadingPage;