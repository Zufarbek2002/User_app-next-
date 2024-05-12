import { datas } from "./data.json"

export function GET() {
    return Response.json(datas)
}

export async function POST(request: Request) {
    const user = await request.json()
    const newData = {
        id: `${datas.length + 1}`,
        fName: user.fName,
        lName: user.lName,
        country: user.country,
        birthday: user.birthday,
        position: user.position,
        job: user.job,
        salary: user.salary,
        isMarried: user.isMarried,
    }
    datas.push(newData)
    return new Response(JSON.stringify(newData), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}