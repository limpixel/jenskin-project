pipeline {
    agent any
    environment {
        // Definisikan environment global jika dibutuhkan
        NODE_HOME = '/usr/local/bin/' // Sesuaikan lokasi Node.js jika diperlukan
        PATH = "$NODE_HOME:$PATH"
    }
    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking GitHub Dulu Wak...'
                git branch: 'main', url: 'https://github.com/limpixel/jenskin-project.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies, Sabar ya Ges...'
                // Periksa apakah Node.js dan npm tersedia, jika tidak error
                sh 'node -v || echo "Node.js is not installed!"'
                sh 'npm -v || echo "npm is not installed!"'
                sh 'npm install'
            }
        }
        stage('Test Website') {
            steps {
                echo 'Running website tests, Gas Running hehhee...'
                // Jalankan script testing dengan node
                sh 'node test-website.js'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the project dulu wak ...'
                // Tambahkan langkah build (sesuai kebutuhan)
                sh 'npm run build || echo "Build step skipped!"'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to server, horeeee ...'
                // Langkah deploy: Copy file ke server lokal atau remote
                sh '''
                # Contoh deploy ke direktori lokal
                mkdir -p /var/www/html/my-website
                cp -r dist/* /var/www/html/my-website/
                '''
            }
        }
    }
    post {
        success {
            echo 'Pipeline Nya Berhasil!'
        }
        failure {
            echo 'Pipeline failed. Kecewa Berat :(.'
        }
    }
}
