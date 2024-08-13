pipeline {
    agent any
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
    }
}
