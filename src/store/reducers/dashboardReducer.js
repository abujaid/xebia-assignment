export default function DashboardReducer(state = {
    counter: 0
}, action) {
    switch (action.type) {
        case 'SEARCH_COUNT_INCREMENT':
            {
                return {
                    ...state,
                    couter: action.payload
                }
            }
        default:
            return state;
    }
}
