import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// const { resolve } = require("path");


// module.exports = {
//   build:{
//     rollupOptions:{
//       input:{
//         main : resolve(__dirname, "index.html"),
//       }
//     }
//   }
// }

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [react(

  )]
})
