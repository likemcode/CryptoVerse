import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders= {
    'X-RapidAPI-Key': '21a1ffb710msh17798960304fcc1p1f691ajsn7d3f7c362914',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl= 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi= createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory:builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timeperiod}`),
        })
    })
});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi;

