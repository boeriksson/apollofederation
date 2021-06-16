import React from 'react'
import {
    useQuery,
    gql
} from '@apollo/client'

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
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const customers = data.customers.map(({name, id}) => (
        <div key={id}>
            <p>
                {name}
            </p>
        </div>
    ))

    return (
        <>
            <div>Hello World!</div>
            {customers}
        </>
    )
}

export default Main