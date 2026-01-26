export async function GET(req: Request) {
    console.log(req);
  return Response.json({
    text: "API is working",
    status: 200,
    // method: req,
    // url: req.url,
    headers: Object.fromEntries(req.headers),
  });
}
