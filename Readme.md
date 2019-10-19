## The Challenge:

A large microservices project has set course to develop a considerable number of REST API's 
in the next 12 months. They are aiming to use a standard set of technologies and patterns to 
bring consistency to their delivery.

- As part of this, you are required to build a boilerplate git repository that includes the 
basic scaffolding required for each team to kick off their projects.

- Your repository should define a comprehensive pipeline that has at least the following 
stages: test, build, publish.

- As part of this, a simple REST API should also be present in the repository that has a 
root / endpoint that returns a basic "Hello World" message, and a /status endpoint that 
returns the following response:

```
{
  "myapplication": [
    {
      "version": "1.0",
      "description": "pre-interview technical test",
      "lastcommitsha": "abc57858585"
    }
  ]
}
```

- Last but not least, your application is packaged and published to the project's Docker 
image repository.

### Considerations:

- You are asked to use the following technologies and make recommendations where required:
- - Code repository: GitHub
- - Pipelines: TravisCI
- - API's programming language: NodeJS or Golang ideally, but feel free to use something you are more 
accustomed to.
- - Image repository: Docker Hub
- The 3 fields in the response above are not hardcoded.
- - lastcommitsha is your repository's commit hash at build time.
- - description and version are supplied through a metadata file residing on the repo.
- Add simple test cases for your application.
- Are there any limitations to your implementation? Any risks associated? If so, explain those.
- The repository should be all in all well documented. Provide comments in code where necessary and a nicely formatted README file.

### Notes

- ```build.yml``` ontains metadata about the project, including the application name, version and description.
- ```lastcommitsha``` - is placed in an .env file by package, and then read into the environment when running.
- Application source code is in ```src/```
- Application test source code is in ```test/```

To run development container:

```$command
# non docker
npm run start 

# docker
docker-compose up develop
```

To run application unit tests:

```$command
# non docker
npm run test

# within docker
docker-compose up test
```

To build production bundle with build.yaml and .env file containing repo hash:

```$command
docker-compose up package
```

To run production container:

```$command
docker-compose up production
```

