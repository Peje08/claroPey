export const reducer = (state: any, action: any): any => {
    switch (action.type) {
        case 'ADD_INITIAL_VALUE':
            return {
                ...action.value
              };
        break;

        case 'ADD_TO_USERIDENTIFY':
            return {
                ...state,
                userIdentify: action.value
              };
        break;

        default:
            return {...state}
            break;
    }
}