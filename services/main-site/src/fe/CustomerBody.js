import React from 'react'
import {gql, useQuery} from '@apollo/client';

const EQUIPMENT = gql`
  query GetEquipmentByCustomerId($customerId: String!) {
      equipments(customerId: $customerId) {
        id
        name
      }
  }
`

const CustomerBody = ({id}) => {
    console.log({id})
    const {loading, error, data} = useQuery(EQUIPMENT, {
        variables: {customerId: id}
    })
    if (error) {
        return <div>Error: {error}</div>
    }
    if (loading) {
        return <div>Loading...</div>
    }
    const equipments = data.equipments.map(({id, name}) => (
        <div key={id}>name</div>
    ))
    console.log({equipments})
    return (
        <div>
            {equipments}
        </div>
    )
}

export default CustomerBody
