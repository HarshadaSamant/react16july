// reducers are pure function who are responsible for updating store 

export var AuthReducer = function(state = {isUserLoggedIn: localStorage.token ? true : false}, action) {
    switch (action.type) {
        case "Login":
            state = {...state}
            state["isUserLoggedIn"] = true
            state["user"] = action.payload
            return state;
        default:
            return state;
    }
}

export var ApiLoad = function(state = {isApiLoaded: true}, action) {
    switch (action.type) {
        case "ApiLoaded":
            state = {...state}
            state["isApiLoaded"] = false
            return state;
        default:
            return state;
    }
}

export var React = function( state = {React_Traning_Material: 10}, action) {
    // // state means here state of store i.e that object whihc contains data
    // action means what it has to do 
    switch (action.type) {
        case "Books":{
            state = {...state}
            return state["React_Traning_Material"]-=2;
        }
        case "Project_Topics": {
            state = {...state}
            return state["React_Traning_Material"]-=1;
        }
    
        default:
            return state;
    }
}

export var Angular = function( state = {Angular_Traning_Material: 10}, action) {
    switch (action.type) {
        case "Books":{
            state = {...state}
            return state["Angular_Traning_Material"]-=3;
        }
        case "Project_Topics": {
            state = {...state}
            return state["Angular_Traning_Material"]-=1;
        }
    
        default:
            return state;
    }
}