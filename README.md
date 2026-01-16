[ELK STACK - BLOG](https://www.elastic.co/blog/getting-started-with-the-elastic-stack-and-docker-compose)


# NestJS Logging with ELK Stack

This project demonstrates sending **NestJS logs** to **Elasticsearch** via **Logstash** and viewing them in **Kibana**.

----------

## Prerequisites

-   Docker & Docker Compose installed
    
-   Node.js 18+ (for NestJS app)
    
-   npm or yarn
    

----------

## 🚀 How to Run

### 1️⃣ Start the ELK Stack

From the project root:

`docker compose up -d` 

-   **Services started**: Elasticsearch, Kibana, Logstash
    
-   **Logstash input**: `http://localhost:8080` (NestJS sends logs here)
    
-   **Elasticsearch**: `https://localhost:9200`
    
-   **Kibana**: `http://localhost:5601`
    

Check containers:

`docker compose ps` 

----------

### 2️⃣ Start NestJS Application

`npm install
npm run start:dev` 

-   NestJS uses Winston logger configured to send logs to **Logstash HTTP input**
    
-   Logs are automatically indexed in Elasticsearch as:
    

`nestjs-YYYY.MM.DD` 

----------

## 🌐 URLs and Ports

Service

URL / Port

NestJS API

`http://localhost:3000`

Logstash HTTP

`http://localhost:8080`

Elasticsearch

`https://localhost:9200`

Kibana

`http://localhost:5601`

----------

## 📊 Viewing Logs

1.  Open **Kibana**: `http://localhost:5601`
    
2.  Go to **Stack Management → Data Views → Create data view**
    
3.  Index pattern:
    

`nestjs-*` 

4.  Time field:
    

`@timestamp` 

5.  Go to **Discover** to view logs in real-time
    

----------

## 📝 Testing Logs

From NestJS app:

`logger.info('GET /hello called', { service: 'AppService' });` 

Or manually send a log:

`curl -X POST http://localhost:8080 \
  -H "Content-Type: application/json" \
  -d '{"message":"Test log","level":"info"}'` 

Check logs in **Kibana → Discover**.

----------

## ⚡ Notes

-   Logstash **must not** run on port 9200 (Elasticsearch)
    
-   Default log index: `nestjs-YYYY.MM.DD`
    
-   For structured logs, add fields like `service`, `route`, `userId` in Winston log metadata
    
-   Time range in Kibana must match logs’ `@timestamp`