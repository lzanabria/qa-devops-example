pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            agent {
                docker {
                    image 'node:16'   // usa Node 16 dentro de Docker
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            agent {
                docker {
                    image 'node:16'
                }
            }
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker-compose build api'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d api'
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
