const redux = require("redux");
// action creator === events creators
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};
const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
};
const claimPolicy = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amamountOfMoneyToCollectount: amountOfMoneyToCollect,
    },
  };
};

// reducers (prevState , action) === eventHandler(prevState ,event)
// check the action then update state
const claimHistory = (prevState = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...prevState, action.payload];
  }
  return prevState;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((policy) => {
      return policy !== action.payload.name;
    });
  }
  return listOfPolicies;
};

const { createStore, combineReducers } = redux;

const allDepartments = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  policies: policies,
});
const store = createStore(allDepartments);

// emmit action === emmit event
store.dispatch(createPolicy("Alex", 20));
store.dispatch(createPolicy("Jim", 30));
store.dispatch(createPolicy("Sara", 50));
store.dispatch(deletePolicy("Jim"));

console.log(store.getState());
