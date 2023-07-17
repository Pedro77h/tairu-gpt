/** @type {import('next').NextConfig} */
require('dotenv').config()
const nextConfig = {
  env: {
    OPENAI_KEY: process.env.OPENAI_KEY
  }
}

module.exports = nextConfig
