import { create } from 'zustand';
import axios from 'axios';

export const useBeerStore = create((set, get) => ({
  beers: [],
  beersfilter: [],
  checkedid: [],
  visibleBeers: [], 
  page: 1,
  fetchBeers: async () => {
    const { page } = get();
    try {
      
      const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}`);
      const fetchedBeers = response.data;
      console.log(fetchedBeers);
      set({ beers: fetchedBeers, visibleBeers: fetchedBeers.slice(0, 15) }); 
      
    } catch (error) {
      console.error('Error fetching beers:', error);
    }
    set({page:page+1})
  },
  checkedBeer: (id) => {
    const { checkedid } = get();
    set({ checkedid: [...checkedid, id] });
  },
  offcheckedBeer: (id) => {
    const { checkedid } = get();
    const newChecked = checkedid.filter((i) => id !== i);
    set({ checkedid: newChecked });
  },
  deleteSelectedBeer: () => {
    const { beers, checkedid } = get();
    const filteredBeers = beers.filter((beer) => !checkedid.includes(beer.id));
    set({ beers: filteredBeers, checkedid: [] });
    set({ visibleBeers: filteredBeers.slice(0, 15) }); 
    },
  endScrolle: () => {
        const { visibleBeers, beers } = get();
        const newVisibleBeers = [
        ...visibleBeers.slice(5),
        ...beers.slice(visibleBeers.length, visibleBeers.length + 5),
        ];
        set({ visibleBeers: newVisibleBeers });

    }
}));
