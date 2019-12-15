declare type Progress = "INITIAL" | "LOADING" | "LOADED" | "FAILED";

declare type ActionType =
  | "ACTION/CALL"
  | "ACTION/CANCEL"
  | "ACTION/SUCCESS"
  | "ACTION/FAILURE"
  | "ACTION/RESET";

declare type Data = Object | null;
declare type StateError = string | null;
declare type Payload = any;

declare type ActionMeta = {
  id: string;
  type: ActionType;
};

declare type State = {
  progress: Progress;
  rollbackProgress: Progress | null;
  loadedCount: number;
  data: Data;
  error: StateError;
};

declare type ActionState = {
  type: string;
  meta: ActionMeta;
  payload?: Payload;
};

declare type ActionTypeMap = {
  CALL: string;
  CANCEL: string;
  SUCCESS: string;
  FAILURE: string;
  RESET: string;
};
