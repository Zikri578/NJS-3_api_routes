// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// res -> respons, req -> request
export default function handler(req, res) {
  res.status(200).json({
    data: [
      {
        id: 1,
        username: "Muzik"
      },
      {
        id: 2,
        username: "Alexander"
      },
      {
        id: 1,
        username: "Graham"
      }
    ]
  })
}
