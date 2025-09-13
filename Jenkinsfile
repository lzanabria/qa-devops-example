pipeline {
    agent any

    tools {
        nodejs "Node16"
    }

    stages {
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
