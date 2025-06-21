export default {
  async getPricing() {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/pricing`);
    if (!response.ok) throw new Error('Failed to fetch pricing');
    return await response.json();
  }
};