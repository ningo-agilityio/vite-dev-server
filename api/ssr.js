export default async function handler(req, res) {
  const { url } = req
  console.log(`Request URL: ${url}`, url.includes('api/webhook'))
  if(url.includes('api/webhook')) {
    res.status(200).json({ message: 'Webhook received', })
    return
  }
}