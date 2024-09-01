//use account id to get account balance
import { GET_ACCOUNT_BY_ID } from "../constants/url"
import useFetch from "./useFetch"
/**
 * @function useFetch
 * @description This hooks calls an api to get account information of the type {account_id:string,balance:number}
 * @param {string} account_id
 * @returns {Object} { response, error, loading }
 * @example resopnse = useAccountId('<account_id>')
 */
export const useAccountId =(account_id : string)=>{
    const {response} : any = useFetch(`${GET_ACCOUNT_BY_ID}/${account_id}`)
    return response
}