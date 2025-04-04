import { NextResponse } from 'next/server'

// This is just an example - replace with your actual database connection
const mockUser = {
    name: "王小明",
    school: "台北市建國高級中學",
    grade: "高三",
    class: "(3)",
    email: "wang.student@school.edu.tw",
    phone: "0912-345-678",
    targetSchools: [
        { schoolName: "國立臺灣大學", department: "資訊工程學系" },
        { schoolName: "國立政治大學", department: "資訊管理學系" },
        { schoolName: "國立臺灣科技大學", department: "人工智慧研究所" }
    ]
}

export async function GET() {
    try {
        // Replace this with your actual database query
        const userData = {
            // Basic user info
            name: "王小明",
            school: "台北市建國高級中學",
            grade: "高三",
            class: "(3)",
            email: "wang.student@school.edu.tw",
            phone: "0912-345-678",
            profilePicture: null, // URL to profile picture if exists
            
            // Target schools with departments
            targetSchools: [
                {
                    id: "1",
                    schoolName: "國立臺灣大學",
                    departmentName: "資訊工程學系",
                    rank: 1
                },
                {
                    id: "2",
                    schoolName: "國立政治大學",
                    departmentName: "資訊管理學系",
                    rank: 2
                },
                {
                    id: "3",
                    schoolName: "國立臺灣科技大學",
                    departmentName: "人工智慧研究所",
                    rank: 3
                }
            ]
        }
        
        return NextResponse.json(userData)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch user data' },
            { status: 500 }
        )
    }
}

export async function PUT(request) {
    try {
        const userData = await request.json()
        // TODO: Update user data in your database
        console.log('Updating user data:', userData)
        
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to update profile' },
            { status: 500 }
        )
    }
} 