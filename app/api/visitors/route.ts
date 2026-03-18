import { NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

const KEY = 'bap:visitors'
const BASE = 234 // starting offset

async function getCount(): Promise<number> {
  const val = await redis.get<number>(KEY)
  return (val ?? 0) + BASE
}

async function increment(): Promise<number> {
  const val = await redis.incr(KEY)
  return val + BASE
}

// GET — return current count
export async function GET() {
  const count = await getCount()
  return NextResponse.json(
    { count },
    { headers: { 'Cache-Control': 'no-store' } }
  )
}

// POST — register new visit, return updated count
export async function POST() {
  const count = await increment()
  return NextResponse.json(
    { count },
    { headers: { 'Cache-Control': 'no-store' } }
  )
}
