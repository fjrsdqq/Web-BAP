import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Production-safe: works on any persistent server (VPS, dedicated, etc.)
// For Vercel/serverless: swap this with Upstash Redis or Vercel KV.
const DATA_FILE = path.join(process.cwd(), 'data', 'visitors.json')
const BASE_COUNT = 234 // Starting offset — real visits are added on top

function readCount(): number {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8')
    const parsed = JSON.parse(raw)
    return typeof parsed.count === 'number' ? parsed.count : BASE_COUNT
  } catch {
    return BASE_COUNT
  }
}

function writeCount(count: number): void {
  // Atomic write: write to temp file first, then rename — prevents corruption
  const tmp = DATA_FILE + '.tmp'
  try {
    fs.writeFileSync(tmp, JSON.stringify({ count }), 'utf-8')
    fs.renameSync(tmp, DATA_FILE)
  } catch {
    // Cleanup temp file if rename failed
    try { fs.unlinkSync(tmp) } catch { /* ignore */ }
  }
}

// GET — return current visitor count (no increment)
export async function GET() {
  const count = readCount()
  return NextResponse.json(
    { count },
    {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Pragma': 'no-cache',
      },
    }
  )
}

// POST — register new visit (increment), return updated count
export async function POST() {
  const count = readCount() + 1
  writeCount(count)
  return NextResponse.json(
    { count },
    {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Pragma': 'no-cache',
      },
    }
  )
}
