import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Replace this with your actual database query
    const schools = await prisma.school.findMany({
      include: {
        departments: true
      }
    })
    
    return NextResponse.json(schools)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch schools data' },
      { status: 500 }
    )
  }
} 