# ---- build stage ----
FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock* ./
# --ignore-scripts skips the husky "prepare" script, which fails without a .git folder
RUN bun install --frozen-lockfile --ignore-scripts

COPY . .
RUN bun run build

# Fail the build clearly if the prerendered shell is missing
RUN test -f dist/client/index.html || (echo "dist/client/index.html not found" && ls -R dist && exit 1)

# ---- serve stage ----
FROM nginx:alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/client /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]