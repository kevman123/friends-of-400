FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src
COPY src/FriendsOf400.ServiceDefaults/FriendsOf400.ServiceDefaults.csproj FriendsOf400.ServiceDefaults/
COPY src/FriendsOf400.Api/FriendsOf400.Api.csproj FriendsOf400.Api/
RUN dotnet restore FriendsOf400.Api/FriendsOf400.Api.csproj
COPY src/FriendsOf400.ServiceDefaults/ FriendsOf400.ServiceDefaults/
COPY src/FriendsOf400.Api/ FriendsOf400.Api/
RUN dotnet publish FriendsOf400.Api/FriendsOf400.Api.csproj -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "FriendsOf400.Api.dll"]
