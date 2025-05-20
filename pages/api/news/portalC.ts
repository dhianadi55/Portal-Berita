// pages/api/news/portalC.ts
import type { NextApiHandler } from 'next';
import { fetchPortalC } from '../../../services/portalC';

const handler: NextApiHandler = async (req, res) => {
  try {
    const news = await fetchPortalC();
    res.status(200).json(news);
  } catch (error) {
    // Menambahkan penanganan error untuk melihat detailnya di konsol server
    console.error('Error fetching news from Portal C:', error);
    res.status(500).json({ message: 'Failed to fetch news from Portal C', error: error.message });
  }
};

export default handler;