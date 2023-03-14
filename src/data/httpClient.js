const api = "https://api.themoviedb.org/3"
export async function get(path){
    const result = await fetch(api + path, {
        headers: {
            Authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg1MzIxNjA1Njc0NDMwZDA3OTIxZGIzZGZjZTM4NyIsInN1YiI6IjY0MGI5MzNlNzI0ZGUxMDA4M2JmNjNhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l0axIIRl7AtGQySbaF9LEZE3Xey-NLhaGLI4pwECIVs", "Content-Type": "application/json;charset=utf-8",
        },
    });
    return await result.json();
}