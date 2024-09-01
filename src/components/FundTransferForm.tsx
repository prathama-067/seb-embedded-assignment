/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Label from "./ui/Label";
import { createTransactionService, getTransactionDetailsService } from "../utils/services";
import { AppContext } from "../context/AppContext";
import { ActionTypes } from "../actions";

const formSchema = z.object({
  accountId: z.string().min(1, "Please select an account id"),
  remark: z.string().min(1, "Please enter a remark"),
  amount: z.coerce
    .number({
      required_error: "Please enter a valid amount",
    })
    .positive(),
});

// Define FormData type based on schema
type FormData = z.infer<typeof formSchema>;

const FundTransferForm: React.FC = ({ accountIds }) => {
  const {
    register,
    handleSubmit,reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      accountId: undefined,
      remark: "",
      amount: undefined,
    },
    resolver: zodResolver(formSchema),
  });
  const { dispatch } = useContext(AppContext);
  const [isSubmitSuccessful,setIsSubmitSuccessful] = useState<boolean>()
  const [transactionId,setTransactionId] = useState<string>('')
  const onSubmit = async(data: FormData, e: React.BaseSyntheticEvent) => {
    try {
        let createTransactionData = {
          account_id:data.accountId,
          amount:data.amount
        }
       let id = await createTransactionService(createTransactionData)
        if(id) {
          setTransactionId(id)
          setIsSubmitSuccessful(true)
          dispatch({type:ActionTypes.ADD_NEW_TRANSACTION,payload:await getTransactionDetailsService(id)})
          alert(
          `Yay!! Funds transferred successfully.  ${"\n"} ${JSON.stringify(data)}`
        );
          }else{
            debugger
          setIsSubmitSuccessful(false)
          alert('Oops! Something went wrong.Please try again.')
          }
    } catch (error: any) {
      console.error("Error:", error);
    }
  };

  useEffect(()=>{
    reset()
  },[isSubmitSuccessful])
  return (
    <div className="border rounded w-70	">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col .gap-2 p-5"
      >
        <Label name={"Account Id"} />
        <div>
          <select
            data-type="account-id"
            {...register("accountId")}
            className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded"
          >
            <>
              <option value="">Select...</option>
              {accountIds.map((accountId:string) => {
                return <option value={accountId}>{accountId}</option>;
              })}
            </>
          </select>
          {errors.accountId && (
            <p style={{ color: "orangered" }}>{errors.accountId.message}</p>
          )}
        </div>

        <Label name={"Remark"} />
        <div>
          <input
            {...register("remark")}
            className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded"
          />
          {errors.remark && (
            <p style={{ color: "orangered" }}>{errors.remark.message}</p>
          )}
        </div>

        <Label name={"Amount"} />
        <div>
          <input
            data-type="amount"
            {...register("amount")}
            className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded"
          />
          {errors.amount && (
            <p style={{ color: "orangered" }}>{errors.amount.message}</p>
          )}
        </div>

        {errors.root && <p style={{ color: "red" }}>{errors.root.message}</p>}
        <Label name={""} />
        <button
          data-type="transaction-submit"
          type="submit"
          disabled={isSubmitting}
          className=" bg-gray-200 rounded py-5 px-5 text-sm"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FundTransferForm;
