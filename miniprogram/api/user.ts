import { get } from "./request"

export const sayUsers= ()=>{
    return get("/users")
}
