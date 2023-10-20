import * as yup from "yup";

export const adminSchema = yup.object().shape({

    password: yup.string().min(6).max(12).required(),
    admin: yup.object().shape({
        fullName: yup.string().required("Full Name is required"),
        dateOfBirth: yup.string().required("dateOfBirth Name is required"),
        gender: yup.string().required("gender Name is required"),
        bloodGroup: yup.string().required("bloodGroup is required"),
        email: yup.string().required("Email is required"),
        contactNo: yup.string().required("Contact No is required"),
        emergencyContactNo: yup.string().required("Emergency Contact No is required"),
        presentAddress: yup.string().required("presentAddress Contact No is required"),
        designation: yup.string().required("designation Contact No is required"),
    })

})