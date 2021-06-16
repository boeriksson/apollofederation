import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import {
    useQuery,
    gql
} from '@apollo/client'

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
    const {loading, error, data} = useQuery(CUSTOMERS)
    if (error) {
        return <div>Error: {error}</div>
    }
    if (loading) {
        return <div>Loading...</div>
    }

    const handleClick = (id) => {
        console.log(id)
    }

    const customers = data.customers.map(({id, name}) => (
        <CustomerEntry key={id} onClick={() => handleClick(id)}>
            <CustomerTitle>
                <div>{id}</div>
                <div>{name}</div>
            </CustomerTitle>
        </CustomerEntry>
    ))

    return <>
        {customers}
    </>
}

export default Main
