export const post = async (url: string, data: unknown) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
}