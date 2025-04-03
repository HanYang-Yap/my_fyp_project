import { NextResponse } from 'next/server'
import { db } from '@/firebase/config'
import { collection, query, where, getDocs } from 'firebase/firestore'

export async function PUT(request) {
    try {
        const { targetSchools } = await request.json()
        
        // TODO: Get user ID from session/auth
        // const userId = session.user.id

        // Update the database with new ranks
        // Example using prisma:
        // await prisma.targetSchool.deleteMany({
        //     where: { userId: userId }
        // });
        
        // await prisma.targetSchool.createMany({
        //     data: targetSchools.map(school => ({
        //         userId: userId,
        //         schoolName: school.schoolName,
        //         departmentName: school.departmentName,
        //         rank: school.rank
        //     }))
        // });

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error updating school ranks:', error)
        return NextResponse.json(
            { error: 'Failed to update school ranks' },
            { status: 500 }
        )
    }
}

export async function GET() {
    try {
        // Get target schools from Firebase
        const schoolsRef = collection(db, 'targetSchools')
        const q = query(schoolsRef, where('userId', '==', 'currentUserId')) // Replace with actual user ID
        const querySnapshot = await getDocs(q)
        
        const schools = []
        querySnapshot.forEach((doc) => {
            schools.push({ id: doc.id, ...doc.data() })
        })

        return NextResponse.json(schools)
    } catch (error) {
        console.error('Error fetching target schools:', error)
        return NextResponse.json({ error: 'Failed to fetch target schools' }, { status: 500 })
    }
} 