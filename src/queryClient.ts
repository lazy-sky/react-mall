// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

import { QueryClient } from '@tanstack/react-query'

type TAnyObject = { [key: string]: any }

export const getClient = () => new QueryClient()

const baseUrl = 'https://fakestoreapi.com'

export const fetcher = async ({
  method,
  path,
  body,
  params
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  path: string
  body?: TAnyObject
  params?: TAnyObject
}) => {
  try {
    const url = `${baseUrl}${path}`
    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': baseUrl
      }
    }
    const res = await fetch(url, fetchOptions)
    const json = await res.json()
    return json
  } catch (err) {
    console.error(err)
  }
}

export const queryKeys = {
  PRODUCTS: 'PRODUCTS'
}