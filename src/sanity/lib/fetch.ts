// Helper functions that execute the queries

// src/sanity/lib/fetch.ts
import { client } from './client'
import { QueryParams } from 'next-sanity'

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 3600, // default cache 1 hour
}: {
  query: string
  params?: QueryParams
  revalidate?: number
}) {

  const result = await client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: revalidate,
    },
  })

  return result;
}