var builder = DistributedApplication.CreateBuilder(args);

var api = builder.AddProject<Projects.FriendsOf400_Api>("api");

builder.AddNpmApp("web", "../friends-of-400-web", "dev")
    .WithReference(api)
    .WaitFor(api)
    .WithHttpEndpoint(env: "PORT")
    .WithExternalHttpEndpoints();

builder.Build().Run();
