{
 "version": 2,
 "builds": [
   {
     "src": "./server/server.js",
     "use": "@vercel/node"
   }
 ],  
 "rewrites": [
   {
     "source": "/(.*)",
     "destination": "/server/server.js"
   }
 ]
}