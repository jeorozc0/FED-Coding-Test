
export const fetchData = async <T>(endpoint: string, params: Record<string, string> = {}): Promise<T> => {
  try {
    const queryParams = new URLSearchParams({
      key: import.meta.env.VITE_API_KEY,
      ...params
    });

    const url = `${import.meta.env.VITE_API_BASE_URL}${endpoint}?${queryParams}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
