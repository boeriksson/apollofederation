import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import {
    useQuery,
    gql
} from '@apollo/client'
import CustomerBody from './CustomerBody';

const CustomerEntry = styled.div`
  margin: 5px;
  padding: 5px;
  border-bottom: 1px solid #222;
  font: 1.1em "Fira Sans", sans-serif;
`
const CustomerTitle = styled.div`
  cursor: pointer;
  display: flex;
  font-weight: 500;

  div:nth-of-type(1) {
    margin-right: 10px;
  }
`

const Expanded = styled.div`
  height: 100px;
`

const CUSTOMERS = gql`
  query GetCustomers {
      customers {
        id
        name
      }
  }
`

const Main = () => {
    const [bodyMap, setBodyMap] = useState({})
    const {loading, error, data} = useQuery(CUSTOMERS)
    if (error) {
        return <div>Error: {error}</div>
    }
    if (loading) {
        return <div>Loading...</div>
    }

    const handleClick = (id) => setBodyMap({...bodyMap, ...{[id]: bodyMap[id] ? !bodyMap[id] : true}})

    const customers = data.customers.map(({id, name}) => {
        const customerBody = bodyMap[id] && <CustomerBody customerId={id}/>
        return (
            <CustomerEntry key={id} onClick={() => handleClick(id)}>
                <CustomerTitle>
                    <div>{id}</div>
                    <div>{name}</div>
                </CustomerTitle>
                {customerBody}
            </CustomerEntry>
        )
    })

    return <>
        {customers}
    </>
}

export default Main
