FROM openjdk:17-alpine

WORKDIR /app

COPY target/*.jar /app/service.jar

EXPOSE 9999

CMD ["java", "-jar", "service.jar"]
