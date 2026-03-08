import { supabase } from '@/lib/supabase';

export interface Anime {
  id: string;
  japanes_name: string;
  english_name: string;
  videos_count: number;
  created_at: string;
}

export const animeService = {
  async getAnimeList(): Promise<Anime[]> {
    const { data, error } = await supabase
      .from('animes')
      .select('id, japanes_name, english_name, videos_count, created_at')
      .order('videos_count', { ascending: false })
      .order('created_at', { ascending: true });

    if (error) {
      throw new Error('FETCH_ERROR: DATA_UNAVAILABLE');
    }

    return data || [];
  },
};
