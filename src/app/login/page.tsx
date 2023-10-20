"use client"

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import PublicHeader from "@/constants/publicHeader";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../asets/login.png";

type FormValue = {
    id: string
    password: string
}
const LoginPage = () => {
    const router = useRouter()

    const [userLogin] = useUserLoginMutation()

    const onSubmit: SubmitHandler<FormValue> = async (data: any) => {
        try {
            const res = await userLogin({ ...data }).unwrap()

            if (res?.accessToken) {
                router.push("/profile")
                message.success("User logged in successfully")
            }

            storeUserInfo({ accessToken: res?.accessToken })

            console.log(res);


        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <PublicHeader />
            <Row className=" min-h-screen justify-center lg:my-24">
                <Col sm={12} md={16} lg={10}>
                    <Image src={loginImage} width={500} alt="" />
                </Col>
                <Col sm={12} md={8} lg={6}>
                    <h1 className=" py-5 text-2xl">Login</h1>
                    <div >
                        <Form submitHandler={onSubmit}>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <FormInput
                                        name="id"
                                        label="User ID"
                                        type="text" size="large"
                                    />
                                </div>
                                <div>
                                    <FormInput
                                        name="password"
                                        label="Password"
                                        type="password"
                                        size="large"
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Button type="primary" htmlType="submit" className="my-4">Login</Button>
                                    <p className="font-semibold">Don&apos;t You have account? <a href="/register">Please Register</a></p>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default LoginPage;