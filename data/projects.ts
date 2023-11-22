import { ProjectInfo } from "@/@types/interfaces";
const projects: ProjectInfo[] = [
  {
    projectId: 1,
    projectName: "Strings and Tones Spring Boot Microservices",
    technologies: ["Java", "Spring Boot", "API Gateway", "Eureka", "Docker"],
    githubLink: "https://github.com/bryanyi/Strings-And-Tones",
    projectDescription: "The goal of this project is to develop a working knowledge of building basic microservices using SpringBoot and Docker. This project is the backend of an eCommerce store that sells guitars and effects pedals, which is built with a microservice architecture.",
    projectImage: "./stringsandtones.png",
  },

  {
    projectId: 2,
    projectName: "Custom Load Balancer in Go",
    technologies: ["Go", "Docker"],
    githubLink: "https://github.com/bryanyi/loadbalancer-go",
    projectDescription: "After building a microservice backend with Spring Boot's API Gateway, I was interested about the inner workings of a loadbalancer. This project is a simple custom loadbalancer using the round-robin algorithm to cycle through 4 servers. Similarly to Spring's API Gateway, there's a YAML file to register the endpoints that will be used. This project also served to help get some practice using Go for the first time.",
    projectImage: "./Custom-Loadbalancer.go.png",
  },
];

export default projects;
