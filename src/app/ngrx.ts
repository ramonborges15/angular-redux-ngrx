import { Action } from "@ngrx/store"

export class ActionModel implements Action {
    type: string;
    payload: any;
}

enum ActionTypes {
    Increment = 'Increment',
    Decrement = 'Decrement',
    SetName = 'SetName'
}

// Criando Actions
export class Decrement implements Action {
    readonly type = ActionTypes.Decrement
}

export class Increment implements Action {
    readonly type = ActionTypes.Increment
}

export const SetName = (name: string) => {
    return<Action> {type: ActionTypes.SetName, payload: name}
}

// Criando Reducers 
const INITIAL_STATE = {
    counter: 0,
    name: ''
}

export const reducer = (state = INITIAL_STATE, action: ActionModel) => {
    switch (action.type) {
        case ActionTypes.Decrement:
            return { ...state, counter: state.counter - 1, name: 'Ramon' }
        case ActionTypes.Increment:
            return { ...state, counter: state.counter + 1, name: 'Erick' }
        case ActionTypes.SetName:
            return { ...state, name: action.payload}
        default:
            return state;
    }
}