const BASE_PATH_FORAPI = process.env.NODE_ENV === "development"?
"http://localhost:3000"
: "https://sanity-ecom-talha-web-talhawaseem2.vercel.app/"

export default BASE_PATH_FORAPI