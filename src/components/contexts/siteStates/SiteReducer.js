const SiteReducer = (state, action) => {
  switch (action.type) {
    case "SIDENAV_ACTIVE":
      return {
        ...state,
        sideNav_Active: !state.sideNav_Active,
      };
    case "SIDENAV_NOT_ACTIVE":
      return {
        sideNav_Active: false,
      };
    case "TRANSACTION_ACTIVE":
      return {
        ...state,
        transactionsModalActive: !state.transactionsModalActive,
      };
    case "TRANSACTION_NOT_ACTIVE":
      return {
        transactionsModalActive: false,
      };

    default:
      return state;
  }
};

export default SiteReducer;
