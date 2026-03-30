using FriendsOf400.Api.Endpoints;
using FriendsOf400.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IDonationService, DonationService>();
builder.Services.AddScoped<IContactService, ContactService>();

var app = builder.Build();

app.UseStaticFiles();

app.MapDonationEndpoints();
app.MapContactEndpoints();

app.MapFallbackToFile("index.html");

app.Run();
