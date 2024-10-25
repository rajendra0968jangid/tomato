// cacheService.js
import foodModel from "../models/foodModel.js";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 3600 }); // Cache TTL of 1 hour (3600 seconds)

const fetchData = async () => {
  try {
    const response = await foodModel.find({});
    const data = await response;
    cache.set('cachedData', data); // Cache the data with key 'cachedData'
    console.log("Data fetched and cached");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const getCachedData = async () => {
  if (cache.has('cachedData')) {
    console.log("Data retrieved from cache");
    return cache.get('cachedData');
  } else {
    // Fetch fresh data if it's not in cache
    return await fetchData();
  }
};

export default getCachedData;
