"use client"
import { Controller, useFormContext } from "react-hook-form"

import { getErrormessageByProperty } from "@/utils/schema-validator"
import { Input } from "antd"

interface IInput {
    name: string
    type?: string
    size?: "large" | "small"
    value?: string | string[] | undefined
    placeholder?: string
    id?: string
    validation?: object
    label?: string

}

const FormInput = ({ name, type, size, value, placeholder, label, id, validation }: IInput) => {
    const { control, formState: { errors } } = useFormContext()

    const erroroMessage = getErrormessageByProperty(errors, name)
    return (
        <>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    type === "password" ?
                        <Input.Password
                            type={type}
                            size={size}
                            placeholder={placeholder}
                            {...field}
                            value={value ? value : field.value}
                        /> : <Input
                            type={type}
                            size={size}
                            placeholder={placeholder}
                            {...field}
                            value={value ? value : field.value}
                        />
                )}
            />
            <small className=" text-red-700">{erroroMessage}</small>
        </>
    )


}

export default FormInput;