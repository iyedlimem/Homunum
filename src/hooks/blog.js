export async function fetchArticles() {
    try {
        const response = await fetch('https://homunum-server.onrender.com/api/articles?populate=*');
        const responseData = await response.json();
        const data = responseData.data;

        // Transform the API response into the expected format
        const transformedData = data.map((item) => ({
            id: item?.id,
            title: item?.attributes?.Title,
            preview: item?.attributes?.preview,
            content: item?.attributes?.content.split("\n\n").map((content) => ({ content })),
            image: item?.attributes?.image?.data.attributes.url,
            category: item?.attributes?.category,
        }));

        return transformedData;
    } catch (error) {
        console.error('Error fetching French Articles data:', error);
        throw error;
    }
}
export async function fetchArticleById(id) {
    try {
        const apiUrl = `https://homunum-server.onrender.com/api/articles/${id}?populate=*`;
        const response = await fetch(apiUrl);
        const responseData = await response.json();

        if (responseData.data) {
            const article = responseData.data;
            // Transform the API response into the expected format for a single article
            const transformedArticle = {
                id: article.id,
                title: article.attributes.Title,
                preview: article.attributes.preview,
                content: article.attributes.content.split("\n\n").map((content) => ({ content })),
                image: article.attributes.image.data.attributes.url,
                category: article.attributes.category,
            };
            return transformedArticle;
        } else {
            // If no article is found, return null
            return null;
        }
    } catch (error) {
        console.error('Error fetching article by ID:', error);
        throw error;
    }
}
