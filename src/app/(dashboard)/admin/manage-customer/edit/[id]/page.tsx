"use client"
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import FormSelectField from "@/components/Form/FormSelectField";
import FormTextArea from "@/components/Form/FormTextArea";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { genderOptions } from "@/constants/global";
import { useCustomerQuery } from "@/redux/api/customerApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";

type ICustomerProps = {
    params: any
}

const EditCustomer = ({ params }: ICustomerProps) => {
    const { id } = params
    const { role } = getUserInfo() as any

    const { data, isLoading } = useCustomerQuery(id)

    console.log(data);


    const onSubmit = async (data: any) => {
        message.loading("Customer updating...");
        try {
            console.log(data);


            message.success("Customer updated successfully")


        } catch (err: any) {
            console.log(err);
            message.error(err)
        }
    }

    const defaultValues = {
        fullName: data?.customer.fullName || "",
    }

    return (

        <>
            <BreadCrumb
                items={
                    [
                        {
                            label: `${role}`,
                            link: `/${role}`,
                        },
                        {
                            label: "manage-customer",
                            link: `/${role}/manage-customer`,
                        },
                        {
                            label: "edit",
                            link: `/${role}/manage-customer/edit`,
                        }
                    ]
                }
            />
            {/* <ActionBar title="Update Customer"></ActionBar> */}
            <div >
                <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                    <div className=" border-2 shadow-inner p-5 my-5">
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="flex gap-y-5">
                            <Col className="gutter-row" span={12}>
                                <div>
                                    <FormInput
                                        name="customer.fullName"
                                        label="Full Name"
                                        type="text" size="large"
                                    />
                                </div>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <div>
                                    <FormInput
                                        name="customer.email"
                                        label="Email"
                                        type="email" size="large"
                                    />
                                </div>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <div>
                                    <FormInput
                                        name="password"
                                        label="Password"
                                        type="password" size="large"
                                    />
                                </div>
                            </Col>
                            <Col className="gutter-row" span={12}>
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
                            <Col className="gutter-row" span={12}>
                                <div>
                                    <FormInput
                                        name="customer.contactNo"
                                        label="Contact No"
                                        type="number" size="large"
                                    />
                                </div>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <div>
                                    <FormInput
                                        name="customer.emergencyContactNo"
                                        label="Emergency Contact No"
                                        type="number" size="large"
                                    />
                                </div>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <div>
                                    <FormTextArea
                                        name="customer.address"
                                        label="address"
                                    />
                                </div>
                            </Col>

                        </Row>
                    </div>
                    <div>
                        <Button type="primary" htmlType="submit" className="my-4">Update</Button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default EditCustomer;