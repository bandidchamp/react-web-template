import React, {createContext, Dispatch, useReducer, useContext} from "react";

type State = {
  isSidebarOpened: boolean,
}
type Action = {
  type: "TOGGLE_SIDEBAR",
  payload: string
};

const initialState = {
    isSidebarOpened: true,
    headerText: ""
}

interface IContext {
  state: State,
  dispatch: (action: Action) => void
}

const layoutReducer = (state:State, action:Action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
  }
}

var LayoutContext = createContext<IContext>({
        state: initialState,
        dispatch: () => {}
    });

const LayoutProvider: React.FC = ({ children }) => {
  var [state, dispatch] = useReducer(layoutReducer, initialState);
  const value = { state, dispatch };
  return (
    <LayoutContext.Provider value={value}>
        {children}
    </LayoutContext.Provider>
  );
}

function useLayoutState() {
  var context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context.state;
}

function useLayoutDispatch() {
  var context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context.dispatch;
}

export { LayoutProvider, useLayoutState, useLayoutDispatch, toggleSidebar};

// ###########################################################
const toggleSidebar = (dispatch:Dispatch<any>) => {
  dispatch({
    type: "TOGGLE_SIDEBAR",
    payload: ""
  });
}
