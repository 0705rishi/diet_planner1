// Google OAuth Configuration
// For production, you'll need to register your domain at console.cloud.google.com

export const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID_HERE";

// For demo purposes, we'll use a test client ID that works on localhost
// In production, replace with your real Google Client ID
export const DEMO_GOOGLE_CLIENT_ID = "123456789-abcdefghijklmnopqrstuvwxyz123456.apps.googleusercontent.com";

// Google OAuth configuration
export const googleConfig = {
  client_id: DEMO_GOOGLE_CLIENT_ID,
  callback: handleGoogleResponse,
  auto_select: false,
  cancel_on_tap_outside: true
};

// Handle Google OAuth response
export function handleGoogleResponse(response) {
  console.log("Google response:", response);
  
  if (response.credential) {
    // Parse the JWT token to get user info
    const userInfo = parseJWT(response.credential);
    console.log("User info:", userInfo);
    
    // Store user data
    localStorage.setItem("userToken", "google_" + Date.now());
    localStorage.setItem("userName", userInfo.name);
    localStorage.setItem("userEmail", userInfo.email);
    localStorage.setItem("userPicture", userInfo.picture);
    
    // Redirect to dashboard
    window.location.href = "/dashboard";
  }
}

// Parse JWT token to extract user information
function parseJWT(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Error parsing JWT:", error);
    return {};
  }
}

// Initialize Google OAuth
export function initializeGoogleAuth() {
  if (window.google && window.google.accounts) {
    window.google.accounts.id.initialize({
      client_id: DEMO_GOOGLE_CLIENT_ID,
      callback: handleGoogleResponse
    });
  }
}