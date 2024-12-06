import axios from 'axios';

const newsApi = axios.create({
  baseURL: process.env.NEWS_API_URL,
  headers: {
    'X-Api-Key': process.env.NEWS_API_KEY
  }
});

export async function getLatestNews(category?: string) {
  try {
    const params = {
      language: 'en',
      pageSize: 5,
      ...(category && { category })
    };
    
    const { data } = await newsApi.get('/top-headlines', { params });
    return data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}