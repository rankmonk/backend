module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '45ab32f3a2991402de799c4edf6a7000'),
  },
});
