export async function fetchHygraph(query) {
    const graphcms_endpoint = process.env.GRAPHCMS_ENDPOINT;
    const graphcms_token = process.env.GRAPHCMS_TOKEN;    

    try {
        const response = await fetch(graphcms_endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${graphcms_token}`,
            },
            body: JSON.stringify({ query }),
            next: { revalidate: 60 },
        });

        const json = await response.json();
        console.log("Status: ", json);
        return json.data;

    } catch (error) {
        console.error("Error fetching data from Hygraph:", error);
        throw error;
    }
}

    
