// Runtime configuration
let runtimeConfig: {
  API_BASE_URL: string;
} | null = null;

// Configuration loading state
let configLoading = true;

// Default fallback configuration
// In Vercel environment, /api/send-email is relative to the current host
const defaultConfig = {
  API_BASE_URL: window.location.origin, 
};

// Function to load runtime configuration
export async function loadRuntimeConfig(): Promise<void> {
  try {
    console.log('🔧 DEBUG: Starting to load runtime config...');
    // Try to load configuration from a config endpoint
    const response = await fetch('/api/config');
    if (response.ok) {
      const contentType = response.headers.get('content-type');
      // Only parse as JSON if the response is actually JSON
      if (contentType && contentType.includes('application/json')) {
        runtimeConfig = await response.json();
        console.log('Runtime config loaded successfully');
      } else {
        console.log(
          'Config endpoint returned non-JSON response, skipping runtime config'
        );
      }
    } else {
      console.log(
        '🔧 DEBUG: Config fetch failed with status:',
        response.status
      );
    }
  } catch (error) {
    console.log('Failed to load runtime config, using defaults:', error);
  } finally {
    configLoading = false;
    console.log(
      '🔧 DEBUG: Config loading finished, configLoading set to false'
    );
  }
}

// Get current configuration
export function getConfig() {
  // First try runtime config (for Lambda/Serverless)
  if (runtimeConfig) {
    return runtimeConfig;
  }

  // Then try Vite environment variables (for local development)
  if (import.meta.env.VITE_API_BASE_URL) {
    return {
      API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    };
  }

  // Finally fall back to default (current origin)
  return {
    API_BASE_URL: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000',
  };
}

// Dynamic API_BASE_URL getter
export function getAPIBaseURL(): string {
  const url = getConfig().API_BASE_URL;
  // Ensure no trailing slash for consistency
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

export const config = {
  get API_BASE_URL() {
    return getAPIBaseURL();
  },
};
