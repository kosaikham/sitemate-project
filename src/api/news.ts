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

export const fetchNews = async (text: string): Promise<NewsType[]> => {
  try {
    const fullURL = `${BASE_URL}?q=${text}&from=2024-06-23&sortBy=popularity&apiKey=2915770e2dd0433d8818397354a3d088`;
    const response = await axios.get(fullURL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch news related to ' + text);
  }
};
