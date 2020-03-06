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

// export type IState = {
//     myActionId: import('../todo/todo.types').ITodoState;
//     // ... more state slices
//   };

export type RootState = {
    myActionId: IUserReducerState2;
    // ... more state slices
  };


// export type RootState = IUserReducerState | IUserReducerState2;
