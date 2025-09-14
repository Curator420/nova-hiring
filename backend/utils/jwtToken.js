export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  // Ensure COOKIE_EXPIRE is a number
  const cookieExpireDays = Number(process.env.COOKIE_EXPIRE);

  const options = {
    expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // HTTPS only in production
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
