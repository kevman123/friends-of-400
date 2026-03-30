using FriendsOf400.Api.Endpoints;
using FriendsOf400.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.AddServiceDefaults();

builder.Services.AddScoped<IDonationService, DonationService>();
builder.Services.AddScoped<IContactService, ContactService>();

var app = builder.Build();

app.MapDefaultEndpoints();

app.UseStaticFiles();

app.MapDonationEndpoints();
app.MapContactEndpoints();

app.MapFallbackToFile("index.html");

app.Run();
