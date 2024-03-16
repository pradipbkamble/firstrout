export interface Iproduct{
    pname: string;
    pdetails: string;
    pstatus: ProductsStatus;
    id: string;
}
export type ProductsStatus="inprocess"|"dispatch"|"deliver";
    
 