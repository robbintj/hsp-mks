# Use a base image com JDK
FROM openjdk:17-jdk-alpine

# Defina o diretório de trabalho
WORKDIR /app

# Copie o jar do projeto
COPY target/mkstech-0.0.1-SNAPSHOT.jar /app/mkstech-0.0.1-SNAPSHOT.jar

# Comando para rodar o aplicativo
CMD ["java", "-jar", "mkstech-0.0.1-SNAPSHOT.jar"]