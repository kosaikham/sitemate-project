import axios from 'axios';

const BASE_URL = `https://newsapi.org/v2/everything`;

export type NewsType = {
  source: {id: null | string; name: string};
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
};

const transformArticles = (article: NewsType) => {
  return {
    ...article,
    title: article.title.substring(0, 30),
    description: article.description.substring(0, 50),
  };
};

export const fetchNews = async (text: string): Promise<NewsType[]> => {
  try {
    const fullURL = `${BASE_URL}?q=${text}&from=2024-06-22&sortBy=popularity&apiKey=2915770e2dd0433d8818397354a3d088`;
    const {data} = await axios.get(fullURL);
    const articles = data.articles as NewsType[];

    return data.status === 'ok'
      ? articles
          .filter(article => {
            return (
              article.source.id !== null &&
              article.author !== null &&
              article.title.indexOf('[Removed]') < 0 &&
              article.description.indexOf('[Removed]') < 0
            );
          })
          .map(transformArticles)
      : [];
  } catch (error) {
    console.error('error ', error);
    throw new Error('Failed to fetch news related to ' + text);
  }
};
