import { ICustomer, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const CUSTOMER_URL = "/customers/";
export const customerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    customers: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: CUSTOMER_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: ICustomer[], meta: IMeta) => {
        return {
          customers: response,
          meta,
        };
      },
      providesTags: [tagTypes.customer],
    }),


    // get single custpmer
    customer: build.query({
      query: (id) => ({
        url: `${CUSTOMER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.customer],
    }),


    // create a new custpmer
    addCustomer: build.mutation({
      query: (data) => ({
        url: "/users/create-customer",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.customer],
    }),


    // update custpmer
    updateCustomer: build.mutation({
      query: (data) => ({
        url: `${CUSTOMER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.customer],
    }),


    // delete custpmer
    deleteCustomer: build.mutation({
      query: (id) => ({
        url: `${CUSTOMER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.customer],
    }),
  }),
});

export const {
  useAddCustomerMutation,
  useCustomersQuery,
  useUpdateCustomerMutation,
  useCustomerQuery,
  useDeleteCustomerMutation
} = customerApi;
