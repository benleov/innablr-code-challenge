[![Build Status](https://travis-ci.org/benleov/innablr-code-challenge.svg?branch=master)](https://travis-ci.org/benleov/innablr-code-challenge)

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

```build.yml``` contains metadata about the project, including the application name, version and description.

- Application source code is in ```src/```
- Application test source code is in ```test/```
- Script for pushing image to docker.io is in ```scripts/docker-push```

### Commands

To run development server:

```$command
# non docker
npm install
npm run start 

# docker
docker-compose build --build-arg TRAVIS_COMMIT=123 develop
docker-compose up develop
```

To run application unit tests:

```$command
# non docker
npm install
npm run test

# within docker
docker-compose build --build-arg TRAVIS_COMMIT=123 test
docker-compose up test
```

To build production container:

```$command
docker-compose build --build-arg TRAVIS_COMMIT=123 production
```

To run production container:

```$command
docker-compose up production
```

To run the image on dockerhub:

```$command
docker run -p 8080:8080 benleov/innablr-code-challenge_production
```
