# Build using a multi-stage build, using the official image
FROM golang:alpine AS builder

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY *.go ./

RUN CGO_ENABLED=0 GOOS=linux go build -o example .

# Place the built result into a completely empty image
FROM scratch

WORKDIR /

COPY --from=builder /app/example .

ENTRYPOINT ["/example"]
