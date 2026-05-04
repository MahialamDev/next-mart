const api = [
    {"id" : 1, "name" : "food"},
    {"id" : 2, "name:" : "meet"}
]

export async function GET(request) {

    return Response.json({
        status: 200,
        api
    })
}