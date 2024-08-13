FROM node:18-alpine AS base 

# Install Stage 
FROM base AS dep 

RUN apk add --no-cache libc6-compat
WORKDIR /app 

COPY yarn.lock* package.json package-lock.json* ./
RUN yarn --frozen-lockfile

# Build Stage 
FROM base AS builder 
WORKDIR /app
COPY --from=dep /app/node_modules ./node_modules 
COPY . .
RUN yarn build

# Production Stage
FROM base AS runner 
WORKDIR /app

RUN adduser -D nextjs


COPY --from=builder /app/public ./public 

RUN mkdir .next 
RUN chown -R nextjs:nextjs .next 
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./ 
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static 

USER nextjs 

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]

