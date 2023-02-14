import { TarhelyDTO } from "./dto/tarhely.dto";

export class TarhelyApi {
    public static async getAll(): Promise <TarhelyDTO[]> {
        const resp = await fetch("http://localhost:3000/tarhely", { 
            method: "GET"
        })

        const data = await resp.json();
        
        return data;
    }
}