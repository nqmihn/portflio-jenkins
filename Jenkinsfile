pipeline {
    agent any
    tools {nodejs "Node-20"}
    stages {
        stage("Install indenpencies"){
            steps {
                echo "Installing dependencies..."
                sh 'npm install'
                echo "Dependencies installed"
            }
        }
        stage("Build") {
            steps {
                echo "Building the project..."
                sh 'npm run build'
                echo "Build completed"
            }
        }
        stage("Build and push docker image"){
            steps{
                echo "Building and pushing docker image..."
                withDockerRegistry(credentialsId: 'docker-hub-jenkins', url: 'https://index.docker.io/v1/') {
                    sh "docker build -t nqmihn/next-portfolio-jenkins:v${env.BUILD_NUMBER} ."
                    sh "docker push nqmihn/next-portfolio-jenkins:v${env.BUILD_NUMBER} ."
                    echo "Completed building and pushing docker image"

                }
            }

        }
    }
}
