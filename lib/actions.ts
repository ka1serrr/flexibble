import {GraphQLClient} from 'graphql-request';
import { retry } from '@reduxjs/toolkit/query';
import { createUserMutation, getUserQuery } from '@/graphql';

const isProduction = process.env.NODE_ENV === 'production';

const apiUrl = isProduction ? process.env.NEXT_PUBLIC_API_URL || '' : 'http://127.0.0.1:4000/graphql'
const apiKey =  isProduction ? process.env.NEXT_PUBLIC_API_KEY || '' : 'letmein'
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL || '' : 'http://localhost:3000'


const client = new GraphQLClient(apiUrl)
const makeGraphQLRequest = async (query: string, variables = {}) => {
  try {
    return await client.request(query, variables)
  } catch (e) {
    throw e.message
  }
}

export const getUser = (email: string) => {
  return makeGraphQLRequest(getUserQuery, {email})
}

export const createUser = (name: string, email: string, avatarUrl: string) => {
  const variables = {
    input: {
      name, email, avatarUrl
    }
  }

  return makeGraphQLRequest(createUserMutation, variables)
}