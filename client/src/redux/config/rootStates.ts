interface IUserReducerState extends State {
    data: {
        readonly currentUser: string;
        readonly isLoadingUser: boolean;
    }
}

interface IUserReducerState2 extends State {
    data: {
        readonly noUser: string;
        readonly peope: boolean;
    }
}


export type RootState = IUserReducerState | IUserReducerState2;
