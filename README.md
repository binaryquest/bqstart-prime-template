# bqstart-prime-template

[bqStart](https://bqstart.com) ASP.NET Core + Angular 16 based Jump Start Project Template


## Install Template

> dotnet new --install BQStartPrimeTemplate


## Create new Project

```
mkdir myproj
cd myproj
dotnet new bqstart-prime -n myproj
```

## Configuration

#### Update AppSettings.json 

Inside appSettings file update the following
```
	"defaultLoginEmail": "<>",
	"defaultPassword": "<>",
```
```
    "SMTP": {
      "Host": "smtp.gmail.com",
      "Port": "465",
      "Username": "<example@gmail.com>",
      "Password": "<my password>",
      "SenderEmail": "example@gmail.com",
      "SenderName": "example@gmail.com",
      "SSL": "true"
    }
```

#### Update Startup.cs

Inside Startup.cs file you can modify your application related services. You can optionally update the application name, default time zone etc under BQ Admin settings section.


#### Angular Project Configurations

The angular project resides in ClientApp folder. You will see app.config.ts file where most of the app configuration resides.
```
  applicationName: 'Template1',
  logoUrl: 'assets/images/logo.png',
  companyName: 'Binary Quest',
  viewDefaults: { defaultPageSize: 50, otherPageSizes: [25, 50, 100] },
  tabbedUserInterface: false,
```
Refer to our documentation website for details config settings.


#### Compile and Run

When you hit build in Visual Studio it will restore all packages by default and build the project. By default the angular project is set to run as a proxy mode. Meaning you will have to do "ng serve" before you can start debugging project from Visual Studio. To keep things simple we use VS Code for Angular project and Visual Studio for backend website. You also need to make sure you have localdb of MS SQL installed.