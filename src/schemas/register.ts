import * as yup from "yup";

export const registerSchema = yup.object().shape({

    password: yup.string().min(6).max(12).required(),
    customer: yup.object().shape({
        fullName: yup.string().required("Full Name is required"),
        gender: yup.string().required("Gender is required"),
        email: yup.string().required("Email is required"),
        contactNo: yup.string().required("Contact No is required"),
        emergencyContactNo: yup.string().required("Emergency Contact No is required"),
        address: yup.string().required("Emergency Contact No is required"),
    })

})