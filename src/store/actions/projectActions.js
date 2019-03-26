export const createProject_action = (project) => {
    return (dispatch,getState)=>{
        //async call
        dispatch({ 
            type: 'CREATE_PROJECT',
            project: project
        })
    }
}