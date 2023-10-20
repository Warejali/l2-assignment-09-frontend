"use client"
import Form from "@/components/Form/Form";
import FormDatePicker from "@/components/Form/FormDatePicker";
import FormInput from "@/components/Form/FormInput";
import FormSelectField from "@/components/Form/FormSelectField";
import FormTextArea from "@/components/Form/FormTextArea";
import BreadCrumb from "@/components/ui/BreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import { bloodGroupOptions, genderOptions } from "@/constants/global";
import { useAddAdminWithFormDataMutation } from "@/redux/api/adminApi";
import { adminSchema } from "@/schemas/admin";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";

const CreateAdmin = () => {

    const [addAdminWithFormData] = useAddAdminWithFormDataMutation()

    const onSubmit = async (values: any) => {
        const obj = { ...values };
        const file = obj["file"];
        delete obj["file"];
        const data = JSON.stringify(obj);
        const formData = new FormData();
        formData.append("file", file as Blob);
        formData.append("data", data);
        message.loading("Creating...");

        try {
            await addAdminWithFormData(formData);
            message.success("admin Created successfuly")
        } catch (error) {
            console.log(error);
        }
    }

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
                        {
                            label: "create-admin",
                            link: `/${role}/manage-admin/create-admin`,
                        },

                    ]
                }
            />
            <h2>Create admin</h2>
            <div>
                <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
                    <div className=" border-2 shadow-inner p-5 my-5">
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="flex gap-y-5">
                            <Col className="gutter-row" span={10}>
                                <div>
                                    <FormInput
                                        name="admin.fullName"
                                        label="Full Name"
                                        type="text" size="large"
                                    />
                                </div>
                            </Col>
                            <Col className="gutter-row" span={10}>
                                <div>
                                    <FormInput
                                        name="admin.designation"
                                        label="Designation"
                                        type="text" size="large"
                                    />
                                </div>
                            </Col>
                            <Col className="gutter-row" span={10}>
                                <div>
                                    <FormInput
                                        name="admin.email"
                                        label="Email"
                                        type="email" size="large"
                                    />
                                </div>
                            </Col>
                            <Col className="gutter-row" span={10}>
                                <div>
                                    <FormInput
                                        name="password"
                                        label="Password"
                                        type="password" size="large"
                                    />
                                </div>
                            </Col>


                            <Col className="gutter-row" span={10}>
                                <div>
                                    <FormInput
                                        name="admin.contactNo"
                                        label="Phone Number"
                                        type="number" size="large"
                                    />
                                </div>
                            </Col>
                            <Col className="gutter-row" span={10}>
                                <div>
                                    <FormInput
                                        name="admin.emergencyContactNo"
                                        label="Emergency Contact No"
                                        type="number" size="large"
                                    />
                                </div>
                            </Col>

                            <Col className="gutter-row" span={5}>
                                <div>
                                    <UploadImage
                                        name="file"
                                    />
                                </div>
                            </Col>
                            <Col className="gutter-row" span={5}>
                                <div>
                                    <FormSelectField
                                        size="large"
                                        name="admin.gender"
                                        options={genderOptions}
                                        label="Gender"
                                        placeholder="Select"
                                    />
                                </div>
                            </Col>
                            <Col className="gutter-row" span={5}>
                                <div>
                                    <FormSelectField
                                        size="large"
                                        name="admin.bloodGroup"
                                        options={bloodGroupOptions}
                                        label="Blood Group"
                                        placeholder="Select"
                                    />
                                </div>
                            </Col>
                            <Col className="gutter-row" span={5}
                            >
                                <FormDatePicker
                                    name="admin.dateOfBirth"
                                    label="Date of birth"
                                    size="large"
                                />
                            </Col>

                            <Col className="gutter-row" span={12}>
                                <div>
                                    <FormTextArea
                                        name="admin.presentAddress"
                                        label="Address"
                                    />
                                </div>
                            </Col>

                        </Row>
                    </div>
                    <Button type="primary" htmlType="submit" className="my-2">Create</Button>
                </Form>
            </div>
        </div>
    );
};

export default CreateAdmin;