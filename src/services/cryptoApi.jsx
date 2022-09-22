import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = { 
    'X-RapidAPI-Key': '7b634a8cc8msh79bd917467710e5p10fff9jsn693034862688',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getExchanges: builder.query({
            query:() => createRequest(`/exchanges`),
          }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`), 
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          })
         
    })
})

export const { useGetCryptosQuery ,useGetExchangesQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery  } = cryptoApi;








// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exch'
// }