const SiteReducer = (state, action) => {
  switch (action.type) {
    case "SIDENAV_ACTIVE":
      return {
        ...state,
        sideNav_Active: true,
      };
    case "SIDENAV_NOT_ACTIVE":
      return {
        ...state,
        sideNav_Active: false,
      };
    case "TRANSACTION_ACTIVE":
      return {
        ...state,
        transactionsModalActive: true,
      };
    case "TRANSACTION_NOT_ACTIVE":
      return {
        ...state,
        transactionsModalActive: false,
      };

    default:
      return state;
  }
};

export default SiteReducer;
