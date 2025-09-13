pipeline {
    agent any

    tools {
        nodejs "Node16"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker-compose build app'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker-compose up -d app'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completado con éxito. Nueva versión desplegada.'
        }
        failure {
            echo '❌ Pipeline fallido. Se mantiene la versión anterior en ejecución.'
        }
    }
}
