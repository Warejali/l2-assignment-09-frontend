"use client"
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import FormSelectField from "@/components/Form/FormSelectField";
import FormTextArea from "@/components/Form/FormTextArea";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { genderOptions } from "@/constants/global";
import PublicHeader from "@/constants/publicHeader";
import { useAddCustomerMutation } from "@/redux/api/customerApi";
import { registerSchema } from "@/schemas/register";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import register from "../../asets/register.png";


const CreateCustomer = () => {
    const [addCustomer] = useAddCustomerMutation()

    const onSubmit = async (data: any) => {
        message.loading("Customer creating...");
        try {
            console.log(data);
            await addCustomer(data)

            message.success("Customer added successfully")


        } catch (err: any) {
            console.log(err);
            message.error(err)
        }
    }

    return (
        <>
            <PublicHeader />
            <BreadCrumb
                items={
                    [
                        {
                            label: "rgister",
                            link: `/rgister`,
                        },
                    ]
                }
            />
            <div>
                <Row className=" min-h-screen justify-center ">
                    <Col sm={12} md={12} lg={10}>
                        <Image src={register} width={700} alt="" />
                    </Col>
                    <Col sm={12} md={12} lg={10}>
                        <h1 className=" py-5 text-2xl">Register</h1>
                        <div >
                            <Form submitHandler={onSubmit} resolver={yupResolver(registerSchema)}>
                                <div className=" border-2 shadow-inner p-5 my-5">
                                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="flex gap-y-5">
                                        <Col className="gutter-row" span={24}>
                                            <div>
                                                <FormInput
                                                    name="customer.fullName"
                                                    label="Full Name"
                                                    type="text" size="large"
                                                />
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={24}>
                                            <div>
                                                <FormInput
                                                    name="customer.email"
                                                    label="Email"
                                                    type="email" size="large"
                                                />
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={24}>
                                            <div>
                                                <FormInput
                                                    name="password"
                                                    label="Password"
                                                    type="password" size="large"
                                                />
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={24}>
                                            <div>
                                                <FormSelectField
                                                    size="large"
                                                    name="customer.gender"
                                                    options={genderOptions}
                                                    label="Gender"
                                                    placeholder="Select"
                                                />
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={24}>
                                            <div>
                                                <FormInput
                                                    name="customer.contactNo"
                                                    label="Contact No"
                                                    type="number" size="large"
                                                />
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={24}>
                                            <div>
                                                <FormInput
                                                    name="customer.emergencyContactNo"
                                                    label="Emergency Contact No"
                                                    type="number" size="large"
                                                />
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={24}>
                                            <div>
                                                <FormTextArea
                                                    name="customer.address"
                                                    label="address"
                                                />
                                            </div>
                                        </Col>

                                    </Row>
                                </div>
                                <div className="flex justify-between items-center">
                                    <Button type="primary" htmlType="submit" className="my-4">Register</Button>
                                    <p className="font-semibold">Do You have account? <a href="/login">Please login</a></p>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default CreateCustomer;