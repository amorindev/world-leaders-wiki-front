import { Leader } from "../domain/domain";

export interface LeaderState {
  leader: Leader | null;
  isLoading: boolean;
  error: Error | null;
}

export const initialState: LeaderState = {
  leader: null,
  isLoading: false,
  error: null,
};
