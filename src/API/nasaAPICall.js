export async function nasaAPICall(httpRequest) {
    const result = await fetch(httpRequest);
    return await result.json();
}
