// utils/jwtToken.js
export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  // Convert env variable to number of days
  const cookieExpireDays = Number(process.env.COOKIE_EXPIRE);

  if (isNaN(cookieExpireDays)) {
    throw new Error("COOKIE_EXPIRE env variable must be a number");
  }

  const options = {
    expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000), // Valid Date object
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // HTTPS only
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Cross-site cookie
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
