import { api } from "@/shared/api/axios_client";
import { AxiosError } from "axios";
import { Leader } from "../domain/domain";

export async function getRandom(): Promise<Leader> {
  try {
    const resp = await api.get<Leader>("/leaders/random");

    return resp.data;
  } catch (err) {
    const axiosError = err as AxiosError;

    if (axiosError.response?.data) {
      const backendError = axiosError.response.data as {
        code: string;
        msg: string;
      };
      throw new Error(backendError.msg);
    }
    throw err;
  }
}
