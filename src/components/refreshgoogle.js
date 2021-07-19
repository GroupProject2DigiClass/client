export const refreshTokenSetup = (res) => {
  // Timing to renew access token
  let refreshTiming = ( 310 - 5 * 60) * 10;
//res.tokenObj.expires_in ||
  const refreshToken = async () => {
    console.log("refresh tokennnnnnnnnnnnnnnnnnnnnnnn outside");
  
    window.location.replace("/login");
    // Setup the other timer after the first one
    setTimeout(refreshToken, refreshTiming);
  };
  console.log("refresh tokennnnnnnnnnnnnnnnnnnnnnnn outside");
  

  // Setup first refresh timer
  setTimeout(refreshToken, refreshTiming);
};
