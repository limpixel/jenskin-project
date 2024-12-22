pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/limpixel/jenskin-project.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test Website') {
            steps {
                // Menjalankan pengujian website
                sh 'node test-website.js'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the project...'
                // Tambahkan proses build jika ada, seperti npm install atau compile CSS
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to server...'
                // Tambahkan langkah untuk memindahkan file ke server atau direktori hosting
            }
        }
    }
    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
