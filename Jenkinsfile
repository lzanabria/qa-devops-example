pipeline {
    agent any

    environment {
        APP_NAME = "qa-devops-example"
        DOCKER_COMPOSE_FILE = "docker-compose.yml"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completado, y test pasados con éxito. API desplegada.'
        }
        failure {
            echo '❌ Pipeline completado y test no pasados. Se mantiene la versión anterior en ejecución.'
        }
    }
}
