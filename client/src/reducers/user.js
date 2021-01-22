const user = (user = null, action) => {
    switch (action.type) {
        case 'AUTH':
            return action.data;        
        default:
            return user;
    }
}
export default user;