import {useState, useEffect} from 'react';
import {NewsType, fetchNews} from '../api/news';

export type SearchQuery = {
  text: string;
};

const useNews = ({text}: SearchQuery) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [news, setNews] = useState<NewsType[]>([]);

  const onLoadNews = async (text: string) => {
    setLoading(true);
    try {
      const data = await fetchNews(text);
      setNews(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch news related to ', error);
      setError(`Unable to load ${text} news`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onLoadNews(text);
  }, []);

  return {
    news,
    error,
    loading,
  };
};

export default useNews;
