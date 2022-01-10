import React, {
  useEffect,
  useReducer,
  FunctionComponent,
  useMemo
} from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client"

import Provider from "./context"
import Home from "./Page/Home/Index"

import { store } from './Reducer/store'
import { reducer } from './Reducer/reducer'

import { IdentifyType } from './utils/getIdentifyType'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const App: FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, store);
  const indentifyType = IdentifyType(window.location.pathname.replace('/', ''));

  useEffect(() => {

    client
    .query({
      query: gql`
        query Claropay {
          claropay(
            ${indentifyType.type}: "${indentifyType.value}"
          ) {
            uuid
            lastName
            firstName
            documentNumber
            phoneNumber
          }
        }
    `
    })
    .then(({data}) => {
      dispatch({
        type: "ADD_INITIAL_VALUE",
        value: data,
      })
    });
  }, [state.action])

  return (
    <Provider value={{ dispatch, state }}>
      {
        useMemo(() => {
          return <Home />
        }, [])
      }
    </Provider>
  );
}

export default App;