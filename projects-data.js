
const projects = [
    {
        "icon": "assets/projects/ivf-logo.png",
        "title": "IVF Module for EHR Systems",
        "description": "Production-grade IVF platform integrated with enterprise EHR systems. Architected IVF-specific database schemas, implemented a Spring Boot backend, and developed an Angular frontend to extend EHR workflows with IVF dashboards and clinical views. Integrated via Kafka and REST APIs for real-time interoperability.",
        "tags": ["Java", "Spring Boot", "Angular", "TypeScript", "HTML", "Kafka", "REST APIs"],
        "links": []
    },
    {
        "icon": "assets/projects/twindoctor-logo.png",
        "title": "TwinDoctor",
        "description": `An intelligent platform integrating agentic orchestration and MCP tools with graph-based knowledge retrieval for the healthcare domain. This system leverages Neo4j and RAG to drive complex workflows, with contributions to the open-source Agno library.`,
        "tags": ["Python", "Neo4j", "MCP", "A2A", "RAG", "Agno"],
        "links": [
            { "icon": "fab fa-github", "text": "Agno", "href": "https://github.com/agno-agi/agno" },
            { "icon": "fas fa-video", "text": "Demo", "href": "https://drive.google.com/file/d/1jdiEFrAjf5XqVifuVcPCzHEG9C3fByJt/view?usp=drive_link" }
        ]
    },
    {
        "icon": "assets/projects/release-automation-logo.png",
        "title": "Release Automation Platform",
        "description": "End-to-end automation platform for microservice releases, dependency management, and data migrations. Built a Django web interface for managing release dependencies, developed Jenkins pipelines for CI/CD, and automated database migrations with Liquibase via ArgoCD workflows.",
        "tags": ["Python", "Django", "Jenkins", "Liquibase", "ArgoCD", "JavaScript"],
        "links": []
    },
    {
        "icon": "assets/projects/fyp-logo.png",
        "title": "Custom computational microscope design and 3D image reconstruction",
        "description": "Designed a novel physics-inspired 3D imaging system using structured illumination to encode depth information onto a planar detector. Developed a computational reconstruction framework integrating deep learning and prior manifolds to solve the inverse problem, enabling 3D image recovery from compressive measurements.",
        "tags": ["Python", "MATLAB", "pytorch"],
        "links": [
            { "icon": "fab fa-github", "text": "github", "href": "https://github.com/sanjith1999/FRIS" },
            { "icon": "fas fa-file-pdf", "text": "Poster", "href": "https://drive.google.com/file/d/1_ik1lRWBjjXKde-qMYyjJDIQfq5x0QnQ/view?usp=drive_link" }
        ]
    },
    {
        "icon": "assets/projects/illegal-activity-recognition-logo.png",
        "title": "Illegal activity recognition",
        "description": "Activity recognition model to identify illegal activities in housing schemes in Singapore. Implemented 3D CNN based video classification on edge devices, involving data pre-processing and overall algorithm development.",
        "tags": ["Python", "TensorFlow", "Keras", "OpenCV"],
        "links": [
            { "icon": "fab fa-github", "text": "github", "href": "https://github.com/internTrio/ActivityRecognition" },
            { "icon": "fas fa-video", "text": "Demo", "href": "https://drive.google.com/file/d/1C8P8ajW2Kv7f_yFa3gTZEYLZTUC65wgb/view?usp=drive_link" }
        ]
    },
    {
        "icon": "assets/projects/face-recognition-logo.png",
        "title": "Face recognition",
        "description": "A Face recognition system to improve security in switch rooms of housing schemes in Singapore. Implemented deep learning based face embedding retrieval and face feature analysis to improve system accuracy.",
        "tags": ["Python", "TensorFlow", "Keras", "OpenCV"],
        "links": [
            { "icon": "fab fa-github", "text": "github", "href": "https://github.com/internTrio/FaceRecognitionTask" }
        ]
    },
    {
        "icon": "assets/projects/people-counter-logo.png",
        "title": "Computationally-efficient people counting system",
        "description": "A light-weight, low-cost and accurate people counting system for edge devices. Designed object tracking algorithms and applied model compression techniques to speed up live inference.",
        "tags": ["Python", "TensorFlow", "Keras", "OpenCV"],
        "links": [
            { "icon": "fab fa-github", "text": "github", "href": "https://github.com/internTrio/peopleCounter" }
        ]
    },
    {
        "icon": "assets/projects/walksense-logo.png",
        "title": "Walksense - 3D Motion capturing system",
        "description": "Sri Lanka's first low cost 3D motion capturing system for the whole body. Configured YOST IMU sensors for wireless data reading and developed motion analysis algorithms.",
        "tags": ["Java", "C++", "jMonkeyEngine"],
        "links": [
            { "icon": "fab fa-github", "text": "github", "href": "https://github.com/ishrath99/BaseVersion" }
        ]
    },
    {
        "icon": "assets/projects/sindib-logo.png",
        "title": "SINDiB - Micromouse",
        "description": "Micromouse project developed for RoboFest 2023. Integrated flood-fill algorithm on STM32 microcontroller, configured motors, and interfaced OLED display via SPI.",
        "tags": ["C", "C++", "STM32CubeIDE"],
        "links": [
            { "icon": "fab fa-github", "text": "github", "href": "https://github.com/sanjith1999/SINDiB-MicroMouse" },
            { "icon": "fas fa-video", "text": "Demo", "href": "https://drive.google.com/file/d/1_QFpPTaaIe4WZVJidbpsUnzyyQLn9AZT/view?usp=drive_link" }
        ]
    }
];
