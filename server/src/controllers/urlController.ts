import { Context } from 'hono';
import { createURL, getURLByShortCode } from '../models/urlModel';

export const shortenURL = async (c: Context) => {
  const { long_url } = await c.req.json();
  console.log('Received long_url:', long_url);
  const { nanoid } = await import('nanoid');
  const short_url = nanoid(7);
  await createURL(long_url, short_url);
  console.log('Generated short_url:', short_url);
  return c.json({ short_url });
};

export const redirectURL = async (c: Context) => {
  const short_url = c.req.param('short_url');
  console.log('Received short_url:', short_url);
  const url = await getURLByShortCode(short_url);
  if (url) {
    return c.redirect(url.long_url, 301);
  }
  return c.text('URL tidak ditemukan', 404);
};
