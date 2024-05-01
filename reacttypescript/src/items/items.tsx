export interface NewsArticle {
    id: number;
    title: string;
    url: string;
    publishedAt: string;
}

export const initialItems: NewsArticle[] = [
    {
        id: 1,
        title: "Breaking News",
        url: "https://example.com/article1",
        publishedAt: "2024-05-02T08:00:00Z"
    },
    {
        id: 2,
        title: "Latest Updates",
        url: "https://example.com/article2",
        publishedAt: "2024-05-02T10:00:00Z"
    },
];