# Use official PostgreSQL image
FROM postgres:latest


# Set environment variables for DB setup
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=mydb

# Copy custom initialization script (if needed)
COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
