const DISPLAY_GREETINGS = 'rails-react-app/microverse/DISPLAY_GREETINGS'

const api = async () => {
    const data = await fetch('/api/v1/greetings')
    const result = await data.json()
    return result
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case DISPLAY_GREETINGS:
            return action.payload;

            default:
                return state;
    }
}

const showGreeting = () => async (dispatch) => {
    const display = await api()

    dispatch({
        type: DISPLAY_GREETINGS,
        payload: display,
    });
};

export { showGreeting, reducer }